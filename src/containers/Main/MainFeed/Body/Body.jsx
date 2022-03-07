import TweetContainer from './TweetContainer/TweetContainer'
import TweetForm from './TweetForm/TweetForm'
export default function Body() {
    return (
        <div className="tweet-body-container">
            <TweetForm />
            <TweetContainer />
        </div >
    );
}