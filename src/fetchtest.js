var fetch = require('node-fetch');

var makeRequest = () => {
    return fetch("http://httpbin.org/get", {
        method: 'GET'
    })
        .then(function(response) {
            return response.json();
        })
        .catch(function(err) {
            return err;
        });
    // return fetch('https://api.github.com/users/github',{
    //         method: 'GET',
    //         mode: 'cors',
    //         body: JSON.stringify({ name: 'test' }),
    //     })
    //     .then((res) => {
    //         console.log('1');
    //         return res.json();
    //     })
    //     .then((data) => {
    //         console.log('2');
    //         return data;
    //     })
    //     .catch((err) => {
    //         return err;
    //     });
};

module.exports = makeRequest;