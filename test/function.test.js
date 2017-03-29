import 'babel-polyfill';

import calculator from '../src/calculator.js';
import operation from '../src/function.js';
import { expect } from 'chai';
import { spy, assert, restore, stub, callsFake } from 'sinon';

describe('operation test', () => {
    var stub_add, stub_mul;

    beforeEach(function() {
        stub_add = stub(calculator, 'add');
        stub_mul = stub(calculator, 'mul');
    });

    afterEach(() => {
        stub_add.restore();
        stub_mul.restore();
    });

    it('the result should be mul result + 1', () => {
        stub_add.returns(100);
        stub_mul.returns(4);
        
        expect(operation(2, 3, 2)).to.be.equal(5);
    });
});