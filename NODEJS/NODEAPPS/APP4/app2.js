'use strict'

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// this code uses m iddleware to grab the stylesheet in the public folder in the application
app.use('/assets', express.static(__dirname + '/public'));

// this uses the next function from express to show the url requested from the url
app.use('/', function(req, res, next){
  console.log('Request Url:' + req.url);
  next();
})

app.get('/', function(req, res){
  res.send('<html><head><link rel="stylesheet" type="text/css" href="/assets/style.css"><title></title></head><body><h1>Hello World!</h1></body></html>')
});

app.get('/person/:id', function(req, res){
  res.send('<html><head><meta charset="utf-8"><title></title></head><body><h1>Person '+req.params.id+'</h1></body></html>')
})

app.get('/api', function(req,res){
  res.json({"firstname":"Adrian", "Lastname": "Pearman" })
})
app.listen(port);
