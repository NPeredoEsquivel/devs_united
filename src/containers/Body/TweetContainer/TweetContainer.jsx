import TweetCard from './TweetCard/TweetCard.jsx';

function TweetContainer({ tweets, likeTweetHandler, deleteTweet }) {
    return (
        <div className="tweet-container">
            {tweets.map((tweet, i) =>
                <TweetCard
                    key={i}
                    tweet={tweet}
                    likeTweetHandler={likeTweetHandler}
                    deleteTweet={deleteTweet}
                />
            )}
        </div>
    );
}

export default TweetContainer