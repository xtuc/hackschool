import Twitter from "twitter"
 
twitterConfig = require("./config.js");

var client = new Twitter(twitterConfig);

export const getTweets = (cb) => {
	client.get('search/tweets', { q: 'node.js' }, (err, tweets, response) => {
		return cb(err, tweets);
	});
}