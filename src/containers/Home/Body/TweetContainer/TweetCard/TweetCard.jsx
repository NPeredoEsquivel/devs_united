import { useContext } from "react";
import { images } from "../../../../../App";
import Span from "../../../../../components/common/Span";
import ProfilePhoto from "../../../../../components/common/ProfilePhoto";
import { AuthContext } from "../../../../../hooks/AuthContext";
import { colors } from "../../../../../hooks/ProfileConfiguration";
import ImageContainer from "../../../../../components/common/ImageContainer";

function TweetCard({ tweet, likeTweetHandler, deleteTweet }) {
    const { currentUser } = useContext(AuthContext);
    let tweetAuthorColor = colors.find(color =>
        color.hex === tweet.userProfileColor
    )
    console.log(tweet.timestamp);
    console.log(new Date(tweet.timestamp));
    return (
        <div className="tweet">
            <div className="tweet__user-img">
                <ProfilePhoto
                    imgSrc={tweet.photoURL}
                />
            </div>
            <div className="tweet__information">
                <div className="tweet-author">
                    <div className="tweet-author__headline">
                        <div className={`author__${tweetAuthorColor.name}`}>
                            <p>{tweet.userNickName}</p>
                        </div>
                        <span> - 5 jun.</span>
                    </div>
                    <Span
                        classOfSpan="tweet-author__delete-action"
                        onClickHandler={(currentUser && currentUser.uid === tweet.userUid) ? () => deleteTweet(tweet.id) : ""}
                        contentOfSpan={(currentUser && currentUser.uid === tweet.userUid) ? (
                            // <img height="13px" alt="trash-can" src={images('./trash-can.png').default} />
                            <ImageContainer
                                imgSrc={images('./trash-can.svg').default}
                                className="trash-can"
                                alternative="trash-can"
                            />

                        ) : ""}
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
        </div >
    );
}

export default TweetCard