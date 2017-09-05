// this example will send HTML through node.js
'use strict'

var http = require('http')
var fs = require('fs')

http.createServer(function(req, res){
  res.writeHead(200, { 'Content-Type': 'text/html'})
  var html = fs.readFileSync(__dirname + '/index.html', 'utf8')
  // fs.createReadStream(__dirname + '/index.html').pipe(res)
  var message = 'Good Evening...';
  html = html.replace('{Message}', message)
  res.end(html)
}).listen(1723, '127.0.0.1')
