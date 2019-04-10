//import the value of the module on a variable
var counter = require('./modules');

console.log(counter(['angel','torres','calix']));


//imports separate modules from mat.js file
var count = require('./mat');

console.log(count.counter(['angel','torres','calix']));

console.log(count.adder(5,6));

console.log(count.adder(count.pi,6));

console.log(count.diff(7,2));
console.log(count.pi);
