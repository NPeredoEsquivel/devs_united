import TweetCard from './TweetCard/TweetCard';

function TweetContainer({ tweets, likeTweetHandler, images }) {
    return (
        <div className="tweet-container">
            {tweets.map((tweet, i) =>
                <TweetCard
                    key={i}
                    tweet={tweet}
                    likeTweetHandler={likeTweetHandler}
                    images={images}
                />
            )}
        </div>
    );
}

export default TweetContainer