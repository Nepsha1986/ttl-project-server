const User = require('./user.controller');

module.exports = (router) => {
    router.post('/user/create', User.createUser);
    router.post('/login', User.auth);
};
