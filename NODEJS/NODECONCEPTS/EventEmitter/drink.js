function Drink(){
  this.events = {}
}

Drink.prototype.on = function(type, listener){
  this.events[type] = this.events[type] || []
  this.events[type].push(listener)
}

Drink.prototype.drink = function(type){
  if (this.events[type]) {
    this.events[type].forEach(function(listener){
      listener();
    })
  }
}

module.exports = Drink
