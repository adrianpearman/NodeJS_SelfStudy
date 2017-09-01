'use strict';

// this following code is refractored by using the ES6 class method
// function Person(firstname, lastname){
//   this.firstname = firstname;
//   this.lastname = lastname;
// }
//
// Person.prototype.greet = function(){
//   console.log(`Hello ${this.firstname} ${this.lastname}`);
// }

class Person{
  constructor(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
  }
  greet(){
    console.log(`Hello ${this.firstname} ${this.lastname}`);
  }
}


var john = new Person('John', 'Doe')
john.greet()

var jane = new Person('Jane', 'Doe')
jane.greet()
