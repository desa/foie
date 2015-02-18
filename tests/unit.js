var assert = require('assert');
var foie = require('../src/foie');

describe('Foie', function() {
  it('should be a function', function() {
    assert.equal(true, foie instanceof Function);
  });
});
