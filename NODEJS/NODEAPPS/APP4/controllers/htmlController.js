var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });


module.exports = function(app){

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
}
