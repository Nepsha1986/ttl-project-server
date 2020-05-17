const User = require('./user.dao');

exports.createUser = (req, res, next) => {
    const userData = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };

    User.create(userData, (err, user) => {
        if (err) return next(err);
        res.json(user);
    });
};
