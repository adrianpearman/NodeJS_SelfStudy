// this example will send JSON through node.js
'use strict'

var http = require('http')
var fs = require('fs')

// JSON SECTION
// this outputs the obj variable as a JSON object
http.createServer(function(req, res){
  res.writeHead(200, { 'Content-Type': 'application/json'})
  var obj = {
    firstname: 'Adrian',
    lastname: 'Pearman'
  }
  res.end(JSON.stringify(obj))
}).listen(1723, '127.0.0.1')
