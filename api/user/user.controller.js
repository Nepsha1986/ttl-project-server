const {User} = require('./user.dao');
const bcrypt = require('bcrypt');

exports.createUser = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            let user = new User({
                username: req.body.username,
                email: req.body.email,
                password: hash,
            });

            user.token =  user.generateAuthToken();

            User.create(user, (err, user) => {
                if (err) return next(err);

                res.json({
                    username: user.username,
                    email: user.email,
                    token: user.token
                });
            });
        });
};

exports.auth = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email: email}, (err, docs) => {
        if (err || docs === null) return next(err);

        // Checking if pass is valid
        bcrypt.compare(password, docs.password).then((result) => {
            if (result) {
                res.send({
                    name: docs.username,
                    email: docs.email,
                    token: docs.token
                });

            } else {
                res.status(401).send('Authentication failed.')
            }
        });
    });
};
