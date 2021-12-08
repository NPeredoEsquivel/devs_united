import { images } from '../../../../App';
import Span from '../../../../components/Span';
function TweetCard({ tweet, likeTweetHandler, deleteTweet, user }) {
    console.log(tweet);
    return (
        <div className="tweet">
            <div className="tweet__user-img">
                <img src={tweet.photoURL} alt="img" />
            </div>
            <div className="tweet__information">
                <div className="author">
                    <p>{tweet.author}</p>
                    <Span
                        classOfSpan="tweet-card__delete-icon"
                        onClickHandler={(user && user.uid === tweet.uid) ? () => deleteTweet(tweet.id) : ""}
                        contentOfSpan={(user && user.uid === tweet.uid) ? <img height="13px" alt="hearth" src={images('./trash-can.png').default} /> : ""}
                    />
                </div>
                <div className="text">
                    <p>{tweet.text}</p>
                </div>
                <div className="like-icon">
                    <Span
                        classOfSpan="like-icon__img"
                        onClickHandler={() => likeTweetHandler(tweet.id, tweet.likes)}
                        contentOfSpan={<img height="13px" alt="hearth" src={images('./hearth.svg').default} />}
                    />
                    <Span
                        classOfSpan=""
                        onClickHandler=""
                        contentOfSpan={tweet.likes ? tweet.likes : "0"}
                    />
                </div>
            </div>
        </div>
    );
}

export default TweetCard