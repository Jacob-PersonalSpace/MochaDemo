import 'isomorphic-fetch'

var judgeAdult = () => {
    return fetch("http://httpbin.org/get", {
            method: 'GET',
            mode: "cors"
        })
        .then(res => res.json())
        .then(user => {
            return user.age > 18 ? true : false;
        })
        .catch(err => err);
};

export default judgeAdult;