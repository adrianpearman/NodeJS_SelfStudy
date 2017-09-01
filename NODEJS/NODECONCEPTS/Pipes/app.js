var fs = require('fs');
var zlib = require('zlib')

var readable = fs.createReadStream(__dirname + '/data.txt')
var writeable = fs.createWriteStream(__dirname + '/datawrite.txt')
var gzip = zlib.createGzip()
var compressed = fs.createWriteStream(__dirname + '/datawrite.txt.gz')
readable.pipe(writeable)
readable.pipe(gzip).pipe(compressed)
