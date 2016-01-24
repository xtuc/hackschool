import mongoose from "mongoose"

mongoose.connect("mongodb://46.101.217.130/hackerstolz");

export const TweetSchema = mongoose.Schema({
	content: String,
	date: { type: Date, default: Date.now },
	cDate: { type: Date, default: Date.now }
});