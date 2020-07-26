const User = require('./user.controller');

module.exports = (router) => {
    router.post('/user/create', User.createUser);
    router.post('/login', User.auth);
    router.get('/user', User.getUser, (req, res) => {
        res.send(req.user);
    });
};
