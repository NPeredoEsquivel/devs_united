import TextArea from "../../../../../components/TextArea/TextArea";
import Button from "../../../../../components/Button/Button";
import { StatesContext } from "../../../../../hooks/ContextHooks/StatesContext";
import { AuthContext } from "../../../../../hooks/ContextHooks/AuthContext";
import ImageContainer from "../../../../../components/ImageContainer/ImageContainer";
import { useContext } from "react";
import { firestore, serverTimestamp } from "../../../../../Firebase";
import OpacityContainer from "../../../../../components/AnimatedContainer/OpacityContainer"


function TweetForm() {
    const { tweetState } = useContext(StatesContext);
    const { currentUser } = useContext(AuthContext);

    const handleChange = (e) => {
        let newTweet = {
            text: e.target.value,
            author: currentUser.displayName,
            photoURL: currentUser.photoURL,
            userUid: currentUser.uid,
            email: currentUser.email,
            timestamp: serverTimestamp,
            userLikesArr: [],
        };
        tweetState.setTweet(newTweet);
    }

    const sendTweetHandler = (e) => {
        e.preventDefault();
        firestore.collection("tweets").add(tweetState.tweet);
    }
    return (
        <OpacityContainer>
            <div className="tweet-form-container">
                <div className="tweet-form-container__avatar">
                    <ImageContainer
                        imgSrc={currentUser.photoURL}
                        className="tweet-form-container__avatar__img"
                    />
                </div>
                <div className="tweet-form-container__input">
                    <div className="tweet-form-container__input__text-area">
                        <TextArea
                            tweet={tweetState.tweet}
                            handleChange={handleChange}
                            placeholder={"What's happening?"}
                        />

                    </div>
                    <div className="tweet-form-container__input__submit-button">
                        <Button
                            disabled={!(tweetState.tweet.text.length > 0)}
                            buttonText="Post"
                            onClickEvent={sendTweetHandler}
                            buttonClass="tweet-form-container__input__submit-button__btn"
                            pointer={(tweetState.tweet.text.length > 0)}
                        />
                    </div>

                </div>
            </div>
        </OpacityContainer>
    );
}

export default TweetForm;