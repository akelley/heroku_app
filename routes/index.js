var express = require('express');
var Twitter = require('twitter');

var router = express.Router(); 
var client = new Twitter({
  consumer_key: process.ENV.CONSUMER,
  consumer_secret: process.ENV.CONSUMER_SECRET,
  access_token_key: process.ENV.TOKEN,
  access_token_secret: process.ENV.TOKEN_SECRET
});

router.get('/', function(req, res, next){  // https://dev.twitter.com/rest/reference/get/statuses/user_timeline
  var senID = req.query.q;
  console.log(req);
  client.get('statuses/user_timeline', { screen_name: senID, count: 5 }, function(error, tweets, response) {
    
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