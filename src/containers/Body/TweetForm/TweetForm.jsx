import InputText from '../../../components/TextArea';
import TextArea from '../../../components/InputText';
import Button from '../../../components/Button';

function TweetForm({ tweet, sendTweetHandler, handleChange }) {
    return (
        <div className="tweet-form">
            <InputText
                tweet={tweet}
                handleChange={handleChange}
            />
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