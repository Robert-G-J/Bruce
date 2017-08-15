'use strict';

const Container = require('./Container.js')

function Game() {
  this.containers = []
}

Game.prototype.addContainers = function(container1, container2) {
  this.containers.push(container1, container2);
}

module.exports = Game;
