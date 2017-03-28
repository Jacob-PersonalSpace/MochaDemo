var User = require('../App_Code/user.js');

var getUser = (name) => {
    return User.findOne({ 'name': name })
        .then(result => {
            return result.age >= 18 ? true : false;
        })
        .catch(error =>{
            return error;
        });
};

export default getUser;