const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    date: {
        type: Date,
    },
    content: {
        type: String,
    },
    title: {
        type: String,
    },
    excerpt: {
        type: String,
    }
});

module.exports = EventSchema;
