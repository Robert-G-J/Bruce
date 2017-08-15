'use strict';

const Game = require('../src/Game.js');

describe("The Explosive game", function() {
  it("has two containers", function() {
    var game = new Game();
    var smallContainer = jasmine.createSpy("smallContainer")
    var bigContainer = jasmine.createSpy("bigContainer")
    game.addContainers(smallContainer, bigContainer)
    expect(game.containers).toEqual([smallContainer, bigContainer])
  });
})
