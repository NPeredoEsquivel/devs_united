import ProfileContainer from "./ProfileContainer/ProfileContainer";
import ProfileTweetContainer from "./ProfileTweetContainer/ProfileTweetContainer";
import { AuthContext } from "../../../../hooks/ContextHooks/AuthContext";
import { useContext, useEffect, useState } from "react";
import { FilterUserByNickName } from "../../../../helper/FilterUserFromCollection";
import Loading from "../../../../components/Loading/Loading";
import { useParams } from "react-router-dom";

export default function ProfileBody() {
    const { currentUser } = useContext(AuthContext);
    const [filteredUser, setFilteredUser] = useState(null);
    const { profileNickName } = useParams();

    useEffect(() => {
        let userFilteredPromise = FilterUserByNickName(profileNickName)
            .then(user => {
                setFilteredUser(user);
                return user;
            });

        return () => userFilteredPromise;
    }, [])

    const userProfileInformation = filteredUser ? {
        'filteredUser': filteredUser,
        'isFilteredUserCurrentUser': filteredUser.userUid === currentUser.uid,
    } : {};

    return (
        <div className="profile-body-container">
            {filteredUser ?
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