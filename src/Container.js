'use strict';

function Container(volume) {
  this.capacity = volume;
  this.fluid = 0;
}

Container.prototype.fill = function() {
  this.fluid = this.capacity;
}

Container.prototype.empty = function() {
  this.fluid = 0;
}

Container.prototype.transferFluidTo = function(destinationContainer) {
  if(destinationContainer === this) { throw("Cannot transfer to same container") }
  while (destinationContainer.fluid < destinationContainer.capacity) {
    this.fluid -= 1;
    destinationContainer.fluid += 1;
  }
}


module.exports = Container;
