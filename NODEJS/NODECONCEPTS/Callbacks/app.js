'use strict'

function greet (callback){
  console.log('hello');
  var data = {
    name: 'Adrian'
  }
  callback(data)
}

greet(function(data){
  console.log('the callback was invoked');
  console.log(data);
})

greet(function(data){
  console.log('another function was run');
  console.log(data.name);
})
