import { Tweet as ReactTweet } from "react-tweet"

export function Tweet({ tweetId }) {
  return (
    <div className="not-prose">
      <ReactTweet id={tweetId} />
    </div>
  )
}
