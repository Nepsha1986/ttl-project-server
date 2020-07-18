const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('@hapi/joi');
const config = require('config');

const UserSchema = require('./user.model');

UserSchema.statics = {
    create(data, callback) {
        let user = new this(data);
        user.save(callback);
    }
};

UserSchema.methods.generateAuthToken = () => jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, config.get('private_key'));

const User = mongoose.model('User', UserSchema);

//function to validate user
function validateUser(user) {
    const schema = {
        name: Joi.string().min(3).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(3).max(255).required()
    };

    return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
