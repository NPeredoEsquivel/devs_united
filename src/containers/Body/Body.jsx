import TweetContainer from './TweetContainer/TweetContainer'
import TweetForm from './TweetForm/TweetForm'
function Body({ tweet, sendTweetHandler, handleChange, tweets, likeTweetHandler, deleteTweet, user }) {
    return (
        <div className="tweet-body-container">
            <TweetForm
                tweet={tweet}
                sendTweetHandler={sendTweetHandler}
                handleChange={handleChange}
            />
            <TweetContainer
                likeTweetHandler={likeTweetHandler}
                deleteTweet={deleteTweet}
            />
        </div >
    );
}

export default Body;