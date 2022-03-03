import { images } from "../../../../../../App";
import Span from "../../../../../../components/Span";
import ProfilePhoto from "../../../../../../components/ProfilePhoto";
import { useAuthState } from "../../../../../../helper/Auth";
import { colors } from "../../../../../../hooks/ProfileConfiguration";
import ImageContainer from "../../../../../../components/ImageContainer";

function TweetCard({ tweet, likeTweetHandler, deleteTweet }) {
    const { currentUser } = useAuthState();
    let tweetAuthorColor = colors.find(color =>
        color.hex === tweet.userProfileColor
    )
    let date = tweet.timestamp.toDate();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    date = date.toLocaleDateString('es-CL', options).replaceAll(' de ', ' ');
    let fillHearth = tweet.userLikesArr ? (
        tweet.userLikesArr.includes(currentUser.uid) ? true : false
    ) : false;
    console.log(tweet.photoURL);
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
                        <span>{date}.</span>
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
                        onClickHandler={() => likeTweetHandler(tweet)}
                        contentOfSpan={<img height="13px" alt="hearth" src={`${fillHearth ? images('./hearth.svg').default : images('./empty-hearth.svg').default}`} />}
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