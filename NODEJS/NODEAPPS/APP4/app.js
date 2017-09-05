'use strict'

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.send('<html><head><meta charset="utf-8"><title></title></head><body><h1>Hello World!</h1></body></html>')
});

app.get('/person/:id', function(req, res){
  res.send('<html><head><meta charset="utf-8"><title></title></head><body><h1>Person '+req.params.id+'</h1></body></html>')
})

app.get('/api', function(req,res){
  res.json({"firstname":"Adrian", "Lastname": "Pearman" })
})
app.listen(port);
