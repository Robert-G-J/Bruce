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
  do {
    this.fluid -= 1;
    destinationContainer.fluid += 1;
  } while (destinationContainer.fluid < destinationContainer.capacity);
}


module.exports = Container;
