'use strict';

const Container = require('../src/Container.js')

describe("A container", function() {
  it("is initialised with a volume", function() {
    var container = new Container(3);
    expect(container.volume).toEqual(3);
  })
  it("has no fluid when created", function() {
    var container = new Container(5);
    expect(container.fluid).toEqual(0);
  })
  it("can be filled with fluid", function() {
    var container = new Container(3);
    container.fill();
    expect(container.fluid).toEqual(3);
  })
})
