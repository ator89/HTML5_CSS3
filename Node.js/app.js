//console.log('Hallo Welt')

//Functions
function sayHi(){
  console.log('Hi');
}

sayHi();

//Funcion expression

function callFunction(fun){
  fun();
}

var sayByeFunction = function(){
  console.log('bye Function');
};

callFunction(sayBye);

//the variable "sayBye" is equal to the anonymous function
var sayBye = function(){
  console.log('bye');
};



sayBye();





//Print using console
var time = 0;

var timer = setInterval(function(){
  time += 2;
  console.log(time +' seconds have passed');
  if(time > 5){
    clearInterval(timer);
  }
},3000);

console.log(__dirname);//print direction of current folder
console.log(__filename);//print the name of the current file
