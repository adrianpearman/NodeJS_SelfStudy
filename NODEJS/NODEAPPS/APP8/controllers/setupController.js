var Todos = require('../models/todoModel');

module.exports = function(app){
  app.get('/api/setupTodos', function(req, res){
    // seeding thhe data for the app
    var starterTodos=[
      {
        username: 'test',
        todo: 'Buy Eggs',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'Go the MeetUp Event',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'Finish learning about NODE JS',
        isDone: 'false',
        hasAttachment: false
      }
    ];
    Todos.create(starterTodos, function(err, results){
      res.send(results);
    });
  })
}
