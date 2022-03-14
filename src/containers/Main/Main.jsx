import { useParams } from "react-router-dom";
import { useContext } from "react";
import { useAuthState } from "../../hooks/CustomHooks/AuthHook";
import { ProfileConfigurationContext } from "../../hooks/ContextHooks/ProfileContext";
import Loading from "../../components/Loading/Loading";
import { default as ProfileFeedHeader } from "./ProfileFeed/Header/Header";
import { default as ProfileFeedBody } from "./ProfileFeed/Body/Body";
import { default as MainFeedHeader } from "./MainFeed/Header/Header";
import { default as MainFeedBody } from "./MainFeed/Body/Body";

function Main() {
    const { profileNickName } = useParams();
    const { isAuthLoading } = useAuthState();
    const { isProfileLoading } = useContext(ProfileConfigurationContext);

    return (
        <>
            {
                !isAuthLoading && !isProfileLoading ? (
                    <>
                        <header className="header">
                            {profileNickName ?
                                <ProfileFeedHeader />
                                :
                                <MainFeedHeader />
                            }
                        </header>
                        <div className="main">
                            {profileNickName ?
                                <ProfileFeedBody />
                                :
                                <MainFeedBody />
                            }
                        </div>
                    </>
                )
                    :
                    <div className="loading-container">
                        <Loading />
                    </div>
            }
        </>
    );
}

export default Main;