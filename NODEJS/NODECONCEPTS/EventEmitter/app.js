// Using the custom made emitter function
// var Emitter = require('./emitter')

// Using the built in Emitter function from Node
var Emitter = require('events')
var emtr = new Emitter();
var eventConfig = require('./config').event

// Using my own custom emitter function
var Drink = require('./drink')
var drnk = new Drink()

emtr.on(eventConfig.GREET, function(){
  console.log('someone said hello');
})
emtr.on(eventConfig.GREET, function(){
  console.log('a greeting occured');
})
console.log('hello');
emtr.emit(eventConfig.GREET)


drnk.on('beer', function(){
  console.log('someone said have a drink');
})
drnk.on('beer', function(){
  console.log('a drink was served');
})
console.log('yoo');
drnk.drink('beer')
