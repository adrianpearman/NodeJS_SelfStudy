var greet1 = require('./greet')
greet1();

// // calls greet function from greet1 file
// var greet1 = require('./greet1')
// greet1.greet()

// refractered version
var greet2 = require('./greet1').greet
greet2();

var greet3 = require('./greet2');
greet3.greet()
greet3.greeting = 'OHHH SHITT WUDDDUP!'

var greet3b = require('./greet2');
greet3b.greet()

var greet4 = require('./greet3');
var gtr = new greet4()
gtr.greet()

var greet5 = require('./greet4').greet;
greet5();
