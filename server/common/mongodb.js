import mongoose from "mongoose"

mongoose.connect("mongodb://46.101.217.130/hackerstolz");

export const TweetSchema = mongoose.Schema({
	name: String
});