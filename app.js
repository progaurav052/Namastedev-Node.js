const {calculatemultiply} = require("./calculate");
const {calculateSum} = require("./calculate");


var a=10;
var b = 20;

console.log(a);
console.log(b);
//console.log(global); // this is global object provided by node.js and not v8 engine , has setTimeout , setInterval etc which are some superpowers 
// in web browser we use window object which is also global 
//console.log(globalThis); // to make an standard  , because before this it was referred by many names on browsers , webworkers , node 
// so an standard is made , same as globalThis , which is supported accross all now 
calculateSum(a,b);
calculatemultiply(a,b);
