const mongoose = require('mongoose');

const EventSchema = require('./event.model');

EventSchema.statics = {
    getAllEvents(cb) {
        this.find({}, cb)
    }
};

module.exports = mongoose.model('Event', EventSchema);
