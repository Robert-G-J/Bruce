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
  it("can be emptied", function() {
    var container = new Container(3);
    container.fill();
    container.empty();
    expect(container.fluid).toEqual(0);
  })
  it("can transfer fluid to an empty, larger container", function() {
    var container3l = new Container(3);
    var container5l = new Container(5);
    container3l.fill();
    container3l.transferFluidTo(container5l);
    expect(container5l.fluid).toEqual(3);
    expect(container3l.fluid).toEqual(0);
  })
})
