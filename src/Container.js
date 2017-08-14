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
  destinationContainer.fluid += this.fluid;
  this.empty();
}

module.exports = Container;
