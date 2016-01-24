import Twitter from "twitter"
 
const twitterConfig = require("./config.js");
const client = new Twitter(twitterConfig);

export const getTweets = (cb) => {
	client.get('search/tweets', { q: 'node.js' }, (err, tweets, response) => {

		tweets = tweets.statuses.map(tweet => {
			return {
				text: tweet.text,
				date: tweet.created_at
			}
		})

		return cb(err, tweets);
	});
}

export const postTweet = (content) => {
	client.post('statuses/update', { status: content }, (error, tweet, response) => {
		return cb(err, tweets);
	});
}