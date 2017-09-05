module.exports = function(app){
  app.get('/api/person/:id', function(req, res){
    // get data from the database
    res.json({"firstname":"Adrian", "Lastname": "Pearman" })
  })

  app.post('/api/person', function(req, res){
    // save data to the database
  })
  app.delete('api/person/:id', function(req, res){
    // delete information from the database
  })
}
