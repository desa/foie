var assert = require('assert');

var foie = function() { };
describe('Foie', function() {
  it('should be a function', function() {
    assert.equal(true, foie instanceof Function);
  });
});
