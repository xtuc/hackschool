import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import morgan from "morgan"

// import * as twitterSchema from "../common/mongodb"
import * as twitter from "../common/twitterapi"

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors());

app.use(morgan('combined'))

app.get('/', function (req, res) {

	twitter.getTweets((err, tweets) => {
		if(err) {
			console.log(err);
			return res.status(500).json({ error: "Internal server error" });
		}

		return res.json({ tweets: tweets });
	});
});

app.post("/", function (req, res) {
	const content = req.body.content;

	if(!content)
		return res.json({ error: "content argument is required" });

	twitter.postTweet(content, (err, tweet) => {
		if(err) {
			console.log(err);
			return res.status(500).json({ error: "Internal server error" });
		}

		return res.json({ tweet: tweet })
	})
});

app.listen(3000, () => {
	console.log("Server listening on port 3000!");
});