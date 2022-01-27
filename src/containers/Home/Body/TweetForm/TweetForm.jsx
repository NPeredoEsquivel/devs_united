import TextArea from '../../../../components/common/TextArea';
import Button from '../../../../components/common/Button';
import { StatesContext } from '../../../../hooks/StatesContext';
import { AuthContext } from "../../../../hooks/AuthContext";
import { useContext } from 'react';

function TweetForm({ sendTweetHandler, handleChange }) {
    const { tweetState } = useContext(StatesContext);
    const { currentUser } = useContext(AuthContext);

    return (
        <div className="tweet-form-container">
            <div className="tweet-form-container__avatar">
                <img src={currentUser.photoURL} alt="img" />
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
                        buttonText="Post"
                        onClickEvent={sendTweetHandler}
                    />
                </div>

            </div>
        </div>
    );
}

export default TweetForm;