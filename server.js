const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

let testData = [
    {
        id: 1,
        date: '2012-04-23T18:25:43.511Z',
        content: '',
        title: 'Some title here 312895',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, perspiciatis?'
    },

    {
        id: 2,
        date: '2012-04-23T18:25:43.511Z',
        content: '',
        title: 'Some title here 2',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, perspiciatis?'
    },
    {
        id: 3,
        date: '2014-04-23T18:25:43.511Z',
        content: '',
        title: 'Some title here 3',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, perspiciatis?'
    },
    {
        id: 4,
        date: '2012-04-23T18:25:43.511Z',
        content: '',
        title: 'Some title here 4',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, perspiciatis?'
    },
    {
        id: 5,
        date: '2017-04-23T18:25:43.511Z',
        content: '',
        title: 'Some title here 5',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, perspiciatis?'
    },
    {
        id: 6,
        date: '2012-04-23T18:25:43.511Z',
        content: '',
        title: 'Some title here 6',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, perspiciatis?'
    },
    {
        id: 7,
        date: '2012-04-23T18:25:43.511Z',
        content: '',
        title: 'Some title here 7',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, perspiciatis?'
    },
    {
        id: 8,
        date: '2015-04-23T18:25:43.511Z',
        content: '',
        title: 'Some title here 8',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, perspiciatis?'
    },
    {
        id: 9,
        date: '2012-04-23T18:25:43.511Z',
        content: '',
        title: 'Some title here 9',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, perspiciatis?'
    },
    {
        id: 10,
        date: '2011-04-23T18:25:43.511Z',
        content: '',
        title: 'Some title here 10',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, perspiciatis?'
    },
    {
        id: 11,
        date: '1998-04-23T18:25:43.511Z',
        content: '',
        title: 'Some title here 11',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, perspiciatis?'
    }
];

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(port);
app.get('/events', (req, res) => res.json(testData));
