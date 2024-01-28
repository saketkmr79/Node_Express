//MODULES - Encapsulated code (Only share the minimum)
//Every file in node is a module

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flaver')
require('./7-mind-granade')

console.log(data);
sayHi("susan");
sayHi(names.john);
sayHi(names.peter);