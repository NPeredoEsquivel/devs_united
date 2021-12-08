import TextArea from '../../../components/TextArea';
import Button from '../../../components/Button';
import { StatesContext } from '../../../hooks/StatesContext';
import { useContext } from 'react';

function TweetForm({ sendTweetHandler, handleChange }) {
    const { tweetState } = useContext(StatesContext);
    return (
        <div className="tweet-form">
            <TextArea
                tweet={tweetState.tweet}
                handleChange={handleChange}
            />
            <Button
                buttonText="Enviar"
                onClickEvent={sendTweetHandler}
            />
        </div>
    );
}

export default TweetForm;