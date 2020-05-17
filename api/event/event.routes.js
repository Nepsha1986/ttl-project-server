const Event = require('./event.controller');

module.exports = (router) => {
    router.get('/events', Event.getAllEvents);
};
