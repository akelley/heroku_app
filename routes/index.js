var express = require('express');
var Twitter = require('twitter');

var router = express.Router(); 
var client = new Twitter({
  consumer_key: process.env.CONSUMER,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.TOKEN,
  access_token_secret: process.env.TOKEN_SECRET
});

router.get('/', function(req, res, next){  // https://dev.twitter.com/rest/reference/get/statuses/user_timeline
  var handle = req.query.q;
  client.get('statuses/user_timeline', { screen_name: handle, count: 5 }, function(error, tweets, response) {
    
    if (!error) {
      //res.status(200).render('index', { title: 'Express', tweets: tweets });
      res.status(200).jsonp({ tweets });
    }
    else {
      res.status(500).jsonp({ error: error });
    }
  });
});

module.exports = router;