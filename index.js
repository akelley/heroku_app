var express = require('express');
var Twitter = require('twitter');

var router = express.Router(); 
var client = new Twitter({
  consumer_key: process.ENV.consumer,
  consumer_secret: process.ENV.consumer_secret,
  access_token_key: process.ENV.token,
  access_token_secret: process.ENV.token_secret
});

var senator = "SenWarren"; // set to senator handle

router.get('/', function(req, res, next){  // https://dev.twitter.com/rest/reference/get/statuses/user_timeline
  client.get('statuses/user_timeline', { screen_name: senator, count: 5 }, function(error, tweets, response) {
    if (!error) {
      //res.status(200).render('index', { title: 'Express', tweets: tweets });
      res.status(200).json({ tweets });
    }
    else {
      res.status(500).json({ error: error });
    }
  });
});

module.exports = router;