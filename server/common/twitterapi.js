import Twitter from "twitter"
 
const twitterConfig = require("../API/config.js");
const client = new Twitter(twitterConfig);

export const getTweets = (cb) => {
	client.get('statuses/user_timeline', { q: 'node.js' }, (err, tweets, response) => {
/*
		tweets = tweets.statuses.map(tweet => {
			return {
				text: tweet.text,
				date: tweet.created_at
			}
		})

		return cb(err, tweets);
*/
		console.log(tweets);
	return cb(err,tweets);
	});
}

export const postTweet = (content, cb) => {
	client.post('statuses/update', { status: content }, (err, tweet, response) => {
		return cb(err, tweet);
	});
}