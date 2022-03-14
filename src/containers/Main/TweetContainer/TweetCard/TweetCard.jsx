import { images } from "../../../../App";
import Span from "../../../../components/Span/Span";
import { useAuthState } from "../../../../hooks/CustomHooks/AuthHook";
import ImageContainer from "../../../../components/ImageContainer/ImageContainer";
import { Link } from "react-router-dom";
import { likeTweetHandler } from "../../../../utils/helper/LikeTweetHelper";
import FindTweetAuthorColor from "../../../../utils/helper/TweetAuthorColor";
import Modal from "../../../../components/Modal/Modal";
import { useState } from "react";

function TweetCard({ tweet }) {
    const { currentUser } = useAuthState();
    let tweetAuthorColor = FindTweetAuthorColor(tweet.userProfileColor);

    const [openModal, setOpenModal] = useState(false);

    let date = tweet.timestamp.toDate();

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    date = date.toLocaleDateString('es-CL', options).replaceAll(' de ', ' ');

    let fillHearth = tweet.userLikesArr ? (
        tweet.userLikesArr.includes(currentUser.uid) ? true : false
    ) : false;

    return (
        <div className="tweet">
            <div className="tweet__user-img">

                <Link to={`/${tweet.userNickName}`} >
                    <ImageContainer
                        imgSrc={tweet.photoURL}
                    />
                </Link>
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
                        className="tweet-author__delete-action"
                        onClickHandler={(currentUser && currentUser.uid === tweet.userUid) ? () => setOpenModal(true) : null}
                        contentOfSpan={(!openModal && currentUser && currentUser.uid === tweet.userUid) ? (
                            <ImageContainer
                                imgSrc={images('./trash-can.svg').default}
                                className="trash-can"
                                alternative="trash-can"
                            />

                        ) : ""}
                    />
                    {openModal && <Modal
                        setOpenModal={setOpenModal}
                        idTweet={tweet.id}
                    />}
                </div>
                <div className="text">
                    <p>{tweet.text}</p>
                </div>
                <div className="like-icon">
                    <Span
                        className="like-icon__img"
                        onClickHandler={() => likeTweetHandler(tweet, currentUser)}
                        contentOfSpan={<img height="13px" alt="hearth" src={`${fillHearth ? images('./hearth.svg').default : images('./empty-hearth.svg').default}`} />}
                    />
                    <Span
                        className=""
                        contentOfSpan={tweet.likes ? tweet.likes : "0"}
                    />
                </div>
            </div>
        </div >
    );
}

export default TweetCard