var obj = {
  name: 'John Doe',
  greet: function(){
    console.log(`Hello ${this.name}`);
  }
}

obj.greet()

// changes where the this keyword points too
obj.greet.call({ name: 'Jane Doe'})
obj.greet.apply({ name: 'Jane Doe'})

//.call and .apply are the same in functionality but when passed where a params is found, the syntaxs is displayed differently.
// e.g
//  var obj2 = {
//    name: 'adrian pearman',
//    greet: function(param){
//      console.log(`Hello ${this.name}`);
//    }
//  }
//
// obj2.greet()
// obj2.greet.call({name: 'bob ross'}, param, param2)
// obj2.greet.apply({name: 'bob ross'}, [param, param2])
