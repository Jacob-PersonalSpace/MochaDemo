import 'babel-polyfill';

var fetchMock = require('fetch-mock');
var makeRequest = require('../src/fetchtest.js');
var expect = require('chai').expect;
import sinon, { restore } from 'sinon';
import sinonStubPromise from 'sinon-stub-promise';
sinonStubPromise(sinon);

describe('Ajax test', () => {
    let stubFetch;

    beforeEach(() => {
        // stubFetch = sinon.stub(require('node-fetch'), 'fetch');
        stubFetch = sinon.stub(window, 'fetch');
    });

    afterEach(() => {
        sinon.restore(window.fetch);
    });

    it('mock get', (done) => {
        stubFetch.returnsPromise().resolves({ hello: 'world' });

        // return fetch('https://api.github.com')
        //     .then(function(res) {
        //     return res.json();
        //     }).then(function(json) {
        //     expect(json).to.be.an('object');
        //     console.log(json);
        //     });
        // makeRequest().then((data) => {
        //     console.log('haha');
        // });
        // fetchMock.get('*', { hello: 'world' });

        makeRequest().then((data) => {
            console.log('3');
            console.log('got data', data);
            // fetchMock.restore();
        });

        // fetchMock.get('*', {hello: 'world'});

        // makeRequest().then(function(data) {
        // console.log('got data', data);
        // });

        // // Unmock.
        // fetchMock.restore();
    });
});