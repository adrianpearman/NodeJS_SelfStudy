var EventEmitter = require('events');
var util = require('util');

function Greetr(){
  EventEmitter.call(this);
  this.greeting = "Hello World!"
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data){
  console.log(this.greeting + ' ' + data);
  this.emit('greet', data)
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data){
  console.log('Someone was greeted!' + ' '+ data);
})

greeter1.greet('Tony')

// the screen shot displays this in block form for better understanding
