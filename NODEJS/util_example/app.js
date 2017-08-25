var util = require('util');

var name = 'Adrian';
var greeting = util.format('Hello, %s', name)
util.log(greeting)

//  util.format() - The util.format() method returns a formatted string using the first argument as a printf-like format.
// %s -  a string value
