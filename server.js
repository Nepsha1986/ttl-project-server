const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
MongoClient = require('mongodb').MongoClient;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const uri = "mongodb://127.0.0.1:27017";

app.get('/events', (req, res) => {
    MongoClient.connect(uri, {useUnifiedTopology: true}, (err, client) => {
        if(err) {
            console.log(err)
        }

        let db = client.db('ttl-project');
        let collection = db.collection('events');

        collection.find({}).toArray((err, items) => {
            res.json(items);
        })
    });
});

app.listen(port);
