var express = require('express');
var router = express.Router();
var Feed = require('feed-to-json-promise');
let feed = new Feed();
let response;
const yankees = 'http://rssfeeds.northjersey.com/northjerseyyankees&x=1';
const mets = 'http://rssfeeds.northjersey.com/northjerseymets&x=1';

async function getFeed(res, url) {
    try {
        response = await feed.load(url);
        res.json(response);
    } 
    catch (err) {
        console.log(err);
        res.json({Error: "Please contact your site admin"})
    }
}


router.route('/yankees')
    .get(function(req, res) {
        try {
            response = await feed.load(yankees);
            res.json(response);
        } 
        catch (err) {
            console.log(err);
            res.json({Error: "Please contact your site admin"})
        }
    });

router.route('/mets')
    .get(function(req, res) {
        try {
            response = await feed.load(mets);
            res.json(response);
        } 
        catch (err) {
            console.log(err);
            res.json({Error: "Please contact your site admin"})
        }
    });

module.exports = router;