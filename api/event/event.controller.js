const Event = require('./event.dao');

exports.getAllEvents = (req, res, next) => {
    Event.getAllEvents((err, data) => {
        if(err) return next(err);
        res.json(Array.from(data))
    });
};
