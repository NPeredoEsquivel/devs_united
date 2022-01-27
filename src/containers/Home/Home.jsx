import Body from './Body/Body.jsx';
import Header from './Header/Header.jsx';

export default function Home({ sendTweetHandler, handleChange, likeTweetHandler, deleteTweetHandler }) {
    return (
        <>
            <header className="header-container">
                <Header />
            </header>
            <div className="main-container">
                <Body
                    sendTweetHandler={sendTweetHandler}
                    handleChange={handleChange}
                    likeTweetHandler={likeTweetHandler}
                    deleteTweet={deleteTweetHandler}
                />
            </div>
            <footer className="footer-container">

            </footer>
        </>
    );
}