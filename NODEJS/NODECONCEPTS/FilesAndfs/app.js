var fs = require('fs');

// this function runs it synchronusly. waits for the buffer to clear, then run. can make the site run slow if the files are large.
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8')
console.log(greet);


var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data){
  console.log(data);
})

console.log('Done!');
