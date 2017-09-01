// object properties and methods
var obj = {
  greet: 'Hello'
}

console.log(obj.greet);
console.log(obj['greet']);

// using variables to dynamically grab value off a property or object
var prop = 'greet';
console.log(obj[prop]);


// functions and arrays
var arr = []
arr.push(function(){
  console.log('hello world 1');
})
arr.push(function(){
  console.log('hello world 2');
})
arr.push(function(){
  console.log('hello world 3');
})

arr.forEach(function(item){
    item()
})
