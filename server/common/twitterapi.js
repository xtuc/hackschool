import Twitter from "twitter"
 
var client = new Twitter({
	consumer_key: '',
	consumer_secret: '',
	access_token_key: '',
	access_token_secret: ''
});

export const getTweets = (cb) => {
	client.get('search/tweets', { q: 'node.js' }, (err, tweets, response) => {
		return cb(err, tweets);
	});
}