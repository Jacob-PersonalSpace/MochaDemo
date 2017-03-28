import 'babel-polyfill';
import getUser from '../src/dbCall.js';
var sinon = require('sinon');
var Promise = require('bluebird');
var User = require('../App_Code/user.js');
import { expect } from 'chai';

describe('mock db测试', () => {
    describe('case 1: user age is 20', () => {
        let userStub_Ture;

        beforeEach(() => {
            userStub_Ture = sinon.stub(User, 'findOne');

            userStub_Ture.returns(
                new Promise(function(resolve, reject) {
                    return resolve({ 'name': 'Tom', 'age': 20 });
                })
            );
        });

        afterEach(() => {
            sinon.restore(userStub_Ture);
        });

        it('it should return true. ', () => {
            return getUser('Jacob')
                .then((data) => {
                    expect(data).to.be.equal(true);
                });
        });
    });

    describe('case 2: user age is 5', () => {
        let userStub_False;

        beforeEach(() => {
            userStub_False = sinon.stub(User, 'findOne');
            
            userStub_False.returns(
                new Promise(function(resolve, reject) {
                    return resolve({ 'name': 'Tom', 'age': 5 });
                })
            );
        });

        afterEach(() => {
            sinon.restore(userStub_False);
        });

        it('it should return false. ', () => {
            return getUser('Jacob')
                .then((data) => {
                    expect(data).to.be.equal(false);
                });
        });
    });

    describe('case 3: call db failed', () => {
        let userStub_Exception;
        let expectedError;

        beforeEach(() => {
            userStub_Exception = sinon.stub(User, 'findOne');
            expectedError = new Error('oops');

            userStub_Exception.returns(
                new Promise((resolve, reject) => {
                    return reject(expectedError);
                })
            );
        });

        afterEach(() => {
            sinon.restore(userStub_Exception);
        });

        it('it should throw exception. ', () => {
            return getUser('Jacob')
                .then((data) => {
                    expect(expectedError.Error).to.be.equal(data.Error);
                });
        });
    });
});