function Greetr(){
  this.greeting = 'Wuddddup!';
  this.greet = function(){
    console.log(this.greeting);
  }
}

module.exports = new Greetr();
