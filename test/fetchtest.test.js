import 'babel-polyfill';

import fetchMock from 'fetch-mock';
import judgeAdult from '../src/fetchtest.js';
import { expect } from 'chai';

describe('fetch test', () => {
    describe('case 1: return age = 25', () => {
        beforeEach(() => {
            fetchMock.get('http://httpbin.org/get', { name: 'Jacob', age: 25 });
        });

        afterEach(() => {
            fetchMock.restore();
        });

        it('it should return true', () => {
            return judgeAdult()
                .then((data) => {
                    expect(data).to.be.equal(true);
                });
        });
    });

    describe('case 2: return age = 7', () => {
        beforeEach(() => {
            fetchMock.get('http://httpbin.org/get', { name: 'Jacob', age: 7 });
        });

        afterEach(() => {
            fetchMock.restore();
        });

        it('it should return false', () => {
            return judgeAdult()
                .then((data) => {
                    expect(data).to.be.equal(false);
                });
        });
    });

    describe('case 3: fetch error', () => {
        let expectedError = new Error('oops');
        let mockExceptionPromise = new Promise((resolve, reject) => {
                return reject(expectedError);
            });

        beforeEach(() => {
            fetchMock.get('http://httpbin.org/get', mockExceptionPromise);
        });

        afterEach(() => {
            fetchMock.restore();
        });

        it('it should throws error', () => {
            return judgeAdult()
                .then(data => {
                    expect(data.toString()).to.be.equal(expectedError.toString());
                });
        });
    });
});