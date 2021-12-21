import Body from './Body/Body.jsx';
import Header from './Header/Header.jsx';

export default function Home({ sendTweetHandler, handleChange, likeTweetHandler, deleteTweetHandler }) {
    return (
        <div className="home-container">
            <Body
                sendTweetHandler={sendTweetHandler}
                handleChange={handleChange}
                likeTweetHandler={likeTweetHandler}
                deleteTweet={deleteTweetHandler}
            />
        </div>
    );
}