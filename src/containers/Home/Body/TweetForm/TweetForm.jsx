import TextArea from "../../../../components/common/TextArea";
import Button from "../../../../components/common/Button";
import { StatesContext } from "../../../../hooks/StatesContext";
import { AuthContext } from "../../../../hooks/AuthContext";
import ProfilePhoto from "../../../../components/common/ProfilePhoto";
import { useContext } from 'react';

function TweetForm({ sendTweetHandler, handleChange }) {
    const { tweetState } = useContext(StatesContext);
    const { currentUser } = useContext(AuthContext);

    return (
        <div className="tweet-form-container">
            <div className="tweet-form-container__avatar">
                <ProfilePhoto
                    imgSrc={currentUser.photoURL}
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
                    />
                </div>

            </div>
        </div>
    );
}

export default TweetForm;