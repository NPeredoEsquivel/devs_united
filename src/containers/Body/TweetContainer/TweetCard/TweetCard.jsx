import { images } from '../../../../App';
import Span from '../../../../components/Span';
function TweetCard({ tweet, likeTweetHandler, deleteTweet, user }) {

    return (
        <div className="tweet-card">
            <p>{tweet.text}</p>
            <p>{tweet.author}</p>
            <p>{tweet.email}</p>
            <div className="tweet-card__icons">
                <Span
                    className=""
                    onClickHandler=""
                    contentOfSpan={tweet.likes ? tweet.likes : "0"}
                />
                <Span
                    className="tweet-card__icons__span"
                    onClickHandler={() => likeTweetHandler(tweet.id, tweet.likes)}
                    contentOfSpan={<img height="13px" alt="hearth" src={images('./hearth.svg').default} />}
                />
                <Span
                    className="tweet-card__delete-icon"
                    onClickHandler={(user && user.uid == tweet.uid) ? () => deleteTweet(tweet.id) : ""}
                    contentOfSpan={(user && user.uid == tweet.uid) ? "X" : ""}
                />
            </div>
        </div>
    );
}

export default TweetCard