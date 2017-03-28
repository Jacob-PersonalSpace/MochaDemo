import 'babel-polyfill';

import add from '../src/add.js';
import { expect } from 'chai';

describe('es6: add function test', () => {
    it('1 add 1 should return 2', () => {
        expect(add(1, 1)).to.be.equal(2);
    });
});