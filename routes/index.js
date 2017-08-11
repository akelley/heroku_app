var express = require('express');
var Twitter = require('twitter');

var router = express.Router(); 
var client = new Twitter({
  consumer_key: 'UHbO3pcfmfhPHQNFMmEN7E6Jz',
  consumer_secret: 'IQHed5dQgYQyPDKLSqwhjO5K4olicuSiNfOsvRcKWjfa8nidFO',
  access_token_key: '894950779215384577-kmLQp1EK179RvQSXNVjGL5eh5lCzCcJ',
  access_token_secret: 'rPBeCQN93Dl7BHfCcE2igRFVZMbAZOmQEKFXCb2nH2VH4'
});

router.get('/', function(req, res, next){  // https://dev.twitter.com/rest/reference/get/statuses/user_timeline
  client.get('statuses/user_timeline', { screen_name: 'SenWarren', count: 5 }, function(error, tweets, response) {
    if (!error) {
      //res.status(200).render('index', { title: 'Express', tweets: tweets });
      res.status(200).json({tweets});
    }
    else {
      res.status(500).json({ error: error });
    }
  });
});

module.exports = router;