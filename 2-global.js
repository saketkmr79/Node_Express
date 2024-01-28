// GLOBALS  - NO WINDOW

// __dirname - path to current directory
//__filename - file name
// require  -  function to use modules
// module - info about current module
// process - info about environment where the program is being executed

console.log(process.env);

setInterval((val1, val2)=> {
    console.log("interval 1 sec");
    console.log("val1 is : " + val1 + ", val2 is : "+ val2);
},1000, 5, 10);

setTimeout(() => {
    console.log(`function executed in 2 sec`);
}, 2000);

