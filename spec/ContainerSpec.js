'use strict';

const Container = require('../src/Container.js')

describe("A container", function() {
  it("is initialised with a volume", function() {
    var container = new Container(3);
    expect(container.volume).toEqual(3);
  })
})
