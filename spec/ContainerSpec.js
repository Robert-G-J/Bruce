'use strict';

const Container = require('../src/Container.js')

var container, container3l, container5l

beforeEach(function() {
  container = new Container(3);
  container3l = new Container(3);
  container5l = new Container(5);
});

describe("A container", function() {
  it("is initialised with a capacity", function() {
    expect(container.capacity).toEqual(3);
  })
  it("has no fluid when created", function() {
    expect(container.fluid).toEqual(0);
  })
  it("can be filled with fluid", function() {
    container.fill();
    expect(container.fluid).toEqual(3);
  })
  it("can be emptied", function() {
    container.fill();
    container.empty();
    expect(container.fluid).toEqual(0);
  })
  it("can transfer fluid but not beyond capacity", function() {
    container5l.fill();
    container5l.transferFluidTo(container3l);
    expect(container3l.fluid).toEqual(3);
    expect(container5l.fluid).toEqual(2);
  })
  it("raises error if destination Container is same as origin", function() {
    container5l.fill();
    expect(function() { container5l.transferFluidTo(container5l) }).toThrow("Cannot transfer to same container");
  })
})
