//Events
var events = require('events');

//element.on('click',function function(){});

//Create object from new events
var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(mssg){
  console.log(mssg);
});

myEmitter.emit('someEvent', 'The event was emitted');
