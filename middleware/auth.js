const jwt = require('jsonwebtoken');
const config = require('config');
const {User} = require('../api/user/user.dao');

module.exports.AuthMiddleware = (req, res, next) => {
    const token = req.headers["x-access-token"] || req.headers["authorization"];
    //if no token found, return response (without going to the next middelware)
    if (!token) return res.status(401).send("Access denied. No token provided.");

    try {
        //if can verify the token, set req.user and pass to next middleware
        req.user = jwt.verify(token, config.get("private_key"));

        User.findById(req.user._id, (err, data) => {
            if (err) res.status(400).send("Authentication failed. Can not find user.");
            req.user = {
                username: data.username,
                email: data.email
            };
            next();
        });
    } catch (ex) {
        //if invalid token
        res.status(400).send("Invalid token.");
    }
};
