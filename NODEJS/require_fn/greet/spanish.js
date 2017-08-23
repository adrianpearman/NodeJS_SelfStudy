var greeting = require('./greeting.json')

var greet = function(){
  console.log(greeting.es);
}

// using static information
// var greet = function(){
//   console.log('hola');
// }
module.exports = greet;
