var greeting = require('./greeting.json')

var greet = function(){
  console.log(greeting.en);
}

// using static information
// var greet = function(){
//   console.log('hello');
// }
module.exports = greet;
