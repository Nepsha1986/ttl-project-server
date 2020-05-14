const express = require('express');
const mongoose = require('mongoose');
const app = express();
const User = require('./api/models/user.model');
const Event = require('./api/models/event.model');

const uri = "mongodb://127.0.0.1:27017/ttl-project";
const port = process.env.PORT || 3000;
mongoose.set('useCreateIndex', true);
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());

app.get('/events', (req, res, next) => {
    Event.find({}, (err, data) => {
        if (err) {
            return next(err);
        }
        res.json(Array.from(data))
    })
});

app.post('/user/create', (req, res, next) => {
    User.create(req.body, (err, user) => {
        if (err) {
            return next(err);
        }
        console.log('success!');
        res.json(user);
    });
});

app.listen(port);
