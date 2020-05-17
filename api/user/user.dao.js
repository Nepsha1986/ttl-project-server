const mongoose = require('mongoose');
const UserSchema = require('./user.model');

UserSchema.statics = {
    create(data, callback) {
        let user = new this(data);
        user.save(callback);
    }
};

module.exports = mongoose.model('User', UserSchema);
