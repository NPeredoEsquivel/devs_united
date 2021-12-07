import TextArea from '../../../components/TextArea';
import Button from '../../../components/Button';

function TweetForm({ tweet, sendTweetHandler, handleChange }) {
    return (
        <div className="tweet-form">
            <TextArea
                tweet={tweet}
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