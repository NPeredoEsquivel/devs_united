import ProfileContainer from "./ProfileContainer/ProfileContainer";
import ProfileTweetContainer from "./ProfileTweetContainer/ProfileTweetContainer";
import { AuthContext } from "../../../../hooks/ContextHooks/AuthContext";
import { useContext, useEffect, useState } from "react";
import { FilterUserByNickName } from "../../../../utils/helper/FilterUserFromCollection";
import Loading from "../../../../components/Loading/Loading";
import { useParams, useNavigate } from "react-router-dom";

function ProfileBody() {
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [filteringUser, setFilterigUser] = useState(true);
    const [filteredUser, setFilteredUser] = useState({});
    const { profileNickName } = useParams();

    useEffect(() => {
        setFilterigUser(true);
        let userFilteredPromise = FilterUserByNickName(profileNickName)
            .then(user => {
                !user && navigate('/main');
                setFilteredUser(user);
                setFilterigUser(false);
                return user;
            });

        return () => userFilteredPromise;
    }, [profileNickName])

    const userProfileInformation = filteredUser ? {
        'filteredUser': filteredUser,
        'isFilteredUserCurrentUser': filteredUser.userUid === currentUser.uid,
    } : {};

    return (
        <div className="profile-body-container">
            {filteredUser && !filteringUser ?
                (
                    <>
                        <ProfileContainer
                            profileUser={userProfileInformation}
                        />
                        <ProfileTweetContainer
                            profileUser={userProfileInformation}
                        />
                    </>
                )
                :
                (
                    <Loading />
                )
            }
        </div>
    );
}

export default ProfileBody;