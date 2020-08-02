const User = require('./user.controller');
const {AuthMiddleware} = require('../../middleware/auth');

module.exports = (router) => {
    router.post('/user/create', User.createUser);
    router.post('/login', User.auth);
    router.get('/user', AuthMiddleware, (req, res) => {
        res.send(req.user);
    });
};
