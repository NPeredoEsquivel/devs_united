import Body from "./Body/Body";
import Header from "./Header/Header";
import { useAuthState } from "../../helper/Auth";
import { useContext } from "react";
import { ProfileConfigurationContext } from "../../hooks/ProfileConfiguration";
import Loading from "../../components/common/Loading";

export default function Home({ sendTweetHandler, handleChange, likeTweetHandler, deleteTweetHandler }) {
    const { isAuthLoading } = useAuthState();
    const { isProfileLoading } = useContext(ProfileConfigurationContext);

    return (
        <>
            {!isAuthLoading && !isProfileLoading ? (
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
            ) : <Loading />
            }
        </>
    );
}