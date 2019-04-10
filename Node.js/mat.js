//Function with one parameters
var counter = function(arr){
  return 'There are ' + arr.length + ' elements in this array.';
};

//Function with parameters
var adder = function(a,b){
  return `The sum of the 2 numbers is ${a+b}`;
};

var pi = 3.142;

//Export la función directamente
module.exports.diff = function(a,b){
  return `The rest of numbers is ${a-b} `+a;
};

module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;

//Agrupar módulos a exportar
/*
module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
};
*/
