import TweetContainer from './TweetContainer/TweetContainer'
import TweetForm from './TweetForm/TweetForm'
function Body({ sendTweetHandler, handleChange, likeTweetHandler, deleteTweet, user }) {
    return (
        <div className="tweet-body-container">
            <TweetForm
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