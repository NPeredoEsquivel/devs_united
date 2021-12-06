import { images } from '../../../../App';

function TweetCard({ tweet, likeTweetHandler }) {
    return (
        <div className="tweet-card">
            <div className="tweet-card__icons">
                <span>{tweet.likes ? tweet.likes : "0"}</span>
                <span className="tweet-card__icons__span" onClick={() => likeTweetHandler(tweet.id, tweet.likes)}>
                    <img height="13px" alt="hearth" src={images('./hearth.svg').default} />
                </span>
            </div>
        </div>
    );
}

export default TweetCard