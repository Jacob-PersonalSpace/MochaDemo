var add = require('../src/add.js');
var expect = require('chai').expect;

describe('add function test', function() {
    it('1 add 1 should return 2', function() {
        expect(add(1, 1)).to.be.equal(2);
    });
});