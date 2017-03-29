var fetchMock = require('fetch-mock');
var makeRequest = require('../src/fetchtest.js');

// Mock the fetch() global to always return the same value for GET
// requests to all URLs.
// fetchMock.get('*', {hello: 'world'});
fetchMock.mock('http://it.at.there', 404).catch(200);

makeRequest().then(function(data) {
  console.log('got data', data);
    // Unmock.
    fetchMock.restore();
});
