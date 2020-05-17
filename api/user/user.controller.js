const User = require('./user.dao');
const bcrypt = require('bcrypt');

exports.createUser = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const userData = {
                username: req.body.username,
                email: req.body.email,
                password: hash
            };

            User.create(userData, (err, user) => {
                if (err) return next(err);
                res.json(user);
            });
        });
};
