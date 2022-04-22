import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState, memo } from "react";
import { useAuthState } from "../../hooks/CustomHooks/AuthHook";
import { ProfileConfigurationContext } from "../../hooks/ContextHooks/ProfileContext";
import { FilterUserByNickName } from "../../utils/helper/FilterUserFromCollection";
import Loading from "../../components/Loading/Loading";
import { default as ProfileFeedHeader } from "./ProfileFeed/Header/Header";
import { default as ProfileFeedBody } from "./ProfileFeed/Body/Body";
import { default as MainFeedHeader } from "./MainFeed/Header/Header";
import { default as MainFeedBody } from "./MainFeed/Body/Body";

function Main() {
    const { profileNickName } = useParams();
    const { isAuthLoading } = useAuthState();
    const { isProfileLoading } = useContext(ProfileConfigurationContext);
    const [filteredUser, setFilteredUser] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        if (profileNickName) {
            let userFilteredPromise = FilterUserByNickName(profileNickName)
                .then(user => {
                    if (user === null) {
                        setFilteredUser(null);
                        navigate('/404');
                        return;
                    } else {
                        setFilteredUser(user);
                    }
                });

            return () => userFilteredPromise;
        }
    }, [profileNickName])

    const showProfileFeed = profileNickName && filteredUser;

    let didProfileChangeCorrectly = false;
    if (filteredUser) {
        didProfileChangeCorrectly = profileNickName === filteredUser.nickName;
    }

    return (
        <>
            {
                !isAuthLoading && !isProfileLoading ? (
                    <>
                        <header className="header">
                            {showProfileFeed ? (
                                didProfileChangeCorrectly ?
                                    <ProfileFeedHeader
                                        filteredUser={filteredUser}
                                    />
                                    :
                                    <></>
                            )
                                :
                                <MainFeedHeader />
                            }
                        </header>
                        <div className="main">
                            {showProfileFeed ? (
                                didProfileChangeCorrectly ?
                                    <ProfileFeedBody
                                        filteredUser={filteredUser}
                                    />
                                    :
                                    <div className="loading-container">
                                        <Loading />
                                    </div>
                            )
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

export default memo(Main)