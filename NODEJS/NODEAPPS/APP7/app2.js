// this version takes the 'people' array and has it available on the server side of the application as oppossed to the angular side of the application 

'use strict'

var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

var people = [
  {name: 'Adrian'},
  {name: 'Kelsey'},
  {name: 'Mackenzie'},
  {name: 'Terry'}
];

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

app.get('/',function(req,res) {
  res.render('index2', { serverPeople: people });
})

app.listen(port);
