import TweetContainer from "../../../Main/TweetContainer/TweetContainer"
import TweetForm from './TweetForm/TweetForm'

function Body() {
    return (
        <div className="tweet-body-container">
            <TweetForm />
            <TweetContainer />
        </div >
    );
}

export default Body;