const {User} = require('./user.dao');
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

exports.auth = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email}, (err, docs) => {
        if (err || docs === null) return next(err);

        // Checking if pass is valid
        bcrypt.compare(password, docs.password).then((result) => {
            if(result) {
                let user = new User({
                    username: docs.name,
                    password: docs.password,
                    email: docs.email
                });

                let token = user.generateAuthToken();

                res.header("x-auth-token", token).send({
                    name: docs.username,
                    email: docs.email
                });

            } else {
                res.status(401).send('Authentication failed.')
            }
        });
    });
};
