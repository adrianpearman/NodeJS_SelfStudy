angular.module('TestApp', []);

angular.module('TestApp').controller('MainController', ctrlFunc);

function ctrlFunc(){
  this.message = 'Hello World';
  this.newmessage = 'Goodbye World';
  this.people = [
    {
      name: 'Adrian'
    },
    {
      name: 'Kelsey'
    },
    {
      name: 'Mackenzie'
    },
    {
      name: 'Terry'
    }
  ]
}
