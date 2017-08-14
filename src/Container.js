'use strict';

function Container(volume) {
  this.volume = volume;
  this.fluid = 0;
}

Container.prototype.fill = function() {
  this.fluid = this.volume;
}

Container.prototype.empty = function() {
  this.fluid = 0;
}

module.exports = Container;
