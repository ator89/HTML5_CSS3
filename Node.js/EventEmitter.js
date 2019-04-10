//Events
var events = require('events');
var util = require('util');

//element.on('click',function function(){});

//Create object from new events
var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(mssg){
  console.log(mssg);
});

myEmitter.emit('someEvent', 'The event was emitted');

//----------------------------

var Person = function(name){
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var angel = new Person('james');
var antonio = new Person('antonio');
var torres = new Person('torres');
var people = [angel,antonio,torres];

people.forEach(function(person){
  person.on('speak', function(mssg){
    console.log(person.name + ' said: ' + mssg);
  });
});

angel.emit('speak', 'hey');
antonio.emit('speak', 'nooo');
