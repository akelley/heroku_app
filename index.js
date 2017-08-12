var express = require('express');
var Twitter = require('twitter');

var router = express.Router(); 
var client = new Twitter({
  consumer_key: process.ENV.CONSUMER,
  consumer_secret: process.ENV.CONSUMER_SECRET,
  access_token_key: process.ENV.TOKEN,
  access_token_secret: process.ENV.TOKEN_SECRET
});

var senator = "SenWarren"; // set to senator handle

router.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin: *");
  res.header("Access-Control-Allow-Origin-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

res.set

router.get('/', function(req, res, next){  // https://dev.twitter.com/rest/reference/get/statuses/user_timelinz

  res.set({
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "text/javascript; charset=UTF-8",
    "Cache-Control": "public, max-age-28800"
  });

  console.log(req.query);
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