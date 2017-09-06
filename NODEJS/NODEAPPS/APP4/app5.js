'use strict'

// this code is a copy oof app3 but the data is split up into different files to help seperate the code into readable and more manageable files. the main difference is that controllers are created for both the api information and html information

var express = require('express');
var app = express();

// this poprocess would be used when connecting a mySQL database to a NODE JS application
var mysql = require('mysql');

var apiController = require('./controllers/appController')
var htmlController = require('./controllers/htmlController')

var port = process.env.PORT || 3000;

app.use('/', function(req, res, next){
  console.log('Request URL: ' + req.url);

  // this is where the credentials would go for connecting to the mysql server
  var con = mysql.createConnection({
    host: 'localhost',
    user: 'test',
    password: 'test',
    database: 'addressbook'
  })

  // an example of an mySQL search query implemented into the node response.
  con.query('SELECT People.ID, Firstname, Lastname, Address FROM People INNER JOIN PersonAddresses ON People.ID = PersonAddresses,People.ID INNER JOIN Addresses ON PeopleAddressesID = Addresses.ID',
  function(err, rows){
    // this is an error first parameter
    if (err) throw err;
    // this will return the mySQL search request
      console.log(rows);
    }
  })
  next();
})

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.post('/personjson', function(req, res){
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

apiController(app)
htmlController(app)
app.listen(port);
