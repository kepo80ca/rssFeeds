const express = require('express');
// const northjersey = require('./routes/northjersey')

let Feed = require('feed-to-json-promise');
let feed = new Feed();

const yankees = 'http://rssfeeds.northjersey.com/northjerseyyankees&x=1';
const mets = 'http://rssfeeds.northjersey.com/northjerseymets&x=1';


const app = express(),
    port = process.env.PORT || 3000;

    
    app.get('/', function(req, res) {
        res.send('Welcome to my api')
    });
    app.get('/nj-json', function(req, res) {
        feed.load(yankees)
            .then(function(data) {
                res.json(data)
            })
    })
    app.get('/nj-rss', function(req, res) {
        feed.load(yankees)
            .then(function(data) {
                res.send(data)
            })
    })
    // app.use('/nj', northjersey)



app.listen(port, function() {

})