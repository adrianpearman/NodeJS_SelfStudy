function Greetr(){
  this.greeting = 'FUCK';
  this.greet = function(){
    console.log(this.greeting);
  }
}

module.exports = Greetr;
