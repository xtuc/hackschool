import express from "express"
// import * as twitterSchema from "../common/mongodb"
import * as twitter from "../common/twitterapi"

const app = express();

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
	const content = req.param("content");

	console.log(content);
});

app.listen(3000, () => {
	console.log("Server listening on port 3000!");
});