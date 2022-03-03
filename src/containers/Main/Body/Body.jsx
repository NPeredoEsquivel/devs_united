import TweetContainer from './MainBody/TweetContainer/TweetContainer'
import TweetForm from './MainBody/TweetForm/TweetForm'
function Body() {
    return (
        <div className="tweet-body-container">
            <TweetForm />
            <TweetContainer />
        </div >
    );
}

export default Body;