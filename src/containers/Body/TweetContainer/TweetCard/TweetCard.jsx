import { images } from '../../../../App';
import Span from '../../../../components/Span';
function TweetCard({ tweet, likeTweetHandler, deleteTweet }) {
    return (
        <div className="tweet-card">
            <div className="tweet-card__icons">
                <span>{tweet.likes ? tweet.likes : "0"}</span>
                <span className="tweet-card__icons__span" onClick={() => likeTweetHandler(tweet.id, tweet.likes)}>
                    <img height="13px" alt="hearth" src={images('./hearth.svg').default} />
                </span>
                <Span
                    className="tweet-card__delete-icon"
                    onClickHandler={() => deleteTweet(tweet.id)}
                    contentOfSpan="X"
                />
            </div>
        </div>
    );
}

export default TweetCard