import * as twitter from '../common/twitterapi'
import Tweet from '../common/mongodb'

let unsent_tweets = Tweet.find({
  date: {
    '$lte': Date.now()
  },
  sent: {
    '$ne': true
  }
})

unsent_tweets.forEach((t) => {
  t.sent = true
  twitter.postTweet(t.content)
  t.save()
})
