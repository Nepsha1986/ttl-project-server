const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require('./api/user/user.routes');

const app = express();
const Event = require('./api/models/event.model');

const router = express.Router();

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

app.use('/',router);
userRoutes(router);

app.listen(port);
