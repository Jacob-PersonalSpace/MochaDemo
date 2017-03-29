import User from '../App_Code/user.js';

var getUser = (name) => {
    return User.findOne({ 'name': name })
        .then(result => {
            return result.age >= 18 ? true : false;
        })
        .catch(error => error);
};

export default getUser;