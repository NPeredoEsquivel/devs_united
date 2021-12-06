import TweetCard from './TweetCard/TweetCard.jsx';

function TweetContainer({ tweets, likeTweetHandler }) {
    return (
        <div className="tweet-container">
            {tweets.map((tweet, i) =>
                <TweetCard
                    key={i}
                    tweet={tweet}
                    likeTweetHandler={likeTweetHandler}
                />
            )}
        </div>
    );
}

export default TweetContainer