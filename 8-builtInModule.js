// BUILD IN MODULES
// OS
const os = require('os');

// Info about current user
const user = os.userInfo()
// console.log(user);

// log systen uptime in seconds
// console.log(`The system uptime is ${os.uptime()}`);

const currentOs = {
    name: os.type(),
    release : os.release(),
    totalMemory : os.totalmem(),
    freeMemort : os.freemem()
}
// console.log(currentOs)

//PATH

const path = require('path');
// console.log(path.sep); //shows the file seperator for the system

const filePath = path.join("\\content", "/subfolder", "filename.txt"); // joins to create a normalised path
// console.log(filePath);

const base = path.basename(filePath);
// console.log(base); // deconstructs only file name of file

const absolute = path.resolve(__dirname,"content", "subfolder", "filename.txt");
// console.log(absolute); // creates absolute path of a file

// FS - file system
const {readFileSync, writeFileSync, readFile, writeFile} = require("fs")

const first = readFileSync("./content/first.txt","utf-8")
const second = readFileSync("./content/second.txt","utf-8")
writeFileSync(path.join(__dirname,"content","subfolder","result-sync.txt"),
    `Here is the result : ${first}, ${second} \n`,
    {flag: "a"}
)

// console.log(first, second);

readFile("./content/first.txt", "utf-8", (err, result) => {
    if(err) {
        // console.log(err);
        return;
    }
    const fir = result;
    // console.log(`First : ${result}`);
    readFile("./content/second.txt", "utf-8", (err, result) => {
        if(err) {
            // console.log(err);
            return;
        }
        const sec = result;
        // console.log(`Second : ${result}`);
        writeFile("./content/subfolder/async-result.txt", 
        `Here is the data : ${fir}, ${sec}`, {flag : "a"}, (err, res) => {
            if(err) {
                // console.log(err);
                return;
            }
            // console.log(res);
        })
    })
})


// HTTP
const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === "/home") {
        res.write("This is the homepage");
        res.end();
    }
    if(req.url === "/about") {
        res.end("this is the about page");
    }
    if(req.url === "/"){
       res.end("OOPS!") 
    }
})

server.listen(5000,(err) => {
    if(err)
        console.log(err);
    console.log("server started on port 5000");
})