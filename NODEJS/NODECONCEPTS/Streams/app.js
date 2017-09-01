var fs = require('fs')

// reads the data from specified target
var readable = fs.createReadStream(__dirname + '/data.txt', {encoding: 'utf8', highWaterMark: 3 * 1024})

// encoding - converts to specific type
// highWaterMark - chunks the data into the specified size.

// writes the data to specified target
var writeable = fs.createWriteStream(__dirname + '/datacopy.txt')

readable.on('data', function(chunk){
  // console.log(chunk);
  console.log(chunk.length);
  writeable.write(chunk)
})
