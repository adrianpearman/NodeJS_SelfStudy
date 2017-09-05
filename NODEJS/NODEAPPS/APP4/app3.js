'use strict'

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index')
  // instead of using the send method, we have decided to use the ejs module to parse the information
  // res.send('<html><head><meta charset="utf-8"><title></title></head><body><h1>Hello World!</h1></body></html>')
});

app.get('/person/:id', function(req, res){
  res.render('person', {ID: req.params.id, Qstr: req.query.qstr} )
  // res.send('<html><head><meta charset="utf-8"><title></title></head><body><h1>Person '+req.params.id+'</h1></body></html>')
})

app.post('/person', urlencodedParser, function(req, res){
  res.send('Thank You!')
  console.log(req.body.firstname);
  console.log(req.body.lastname);
});

app.post('/personjson', jsonParser, function(req, res){
  res.send('Thank You for the JSON data!')
  console.log(req.body.firstname);
  console.log(req.body.lastname);
})

app.get('/api', function(req,res){
  res.json({"firstname":"Adrian", "Lastname": "Pearman" })
})

// // Example of a REST architype for submitting and receiving data
// app.get('/api/person/:id', function(req, res){
//   // get data from tyhe database
//   res.json({"firstname":"Adrian", "Lastname": "Pearman" })
// })
//
// app.post('/api/person',jsonParser, function(req, res){
//   // save data to the database
// })
// app.delete('api/person/:id', function(req, res){
//   // delete information from the database
// })


app.listen(port);
