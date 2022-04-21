import ProfileContainer from "./ProfileContainer/ProfileContainer";
import ProfileTweetContainer from "./ProfileTweetContainer/ProfileTweetContainer";
import { AuthContext } from "../../../../hooks/ContextHooks/AuthContext";
import { useContext, memo } from "react";

function ProfileBody({ filteredUser }) {
    const { currentUser } = useContext(AuthContext);


    const userProfileInformation = filteredUser ? {
        'filteredUser': filteredUser,
        'isFilteredUserCurrentUser': filteredUser.userUid === currentUser.uid,
    } : {};

    return (
        <div className="profile-body-container">
            <ProfileContainer
                profileUser={userProfileInformation}
            />
            <ProfileTweetContainer
                profileUser={userProfileInformation}
            />
        </div>
    );
}

export default memo(ProfileBody);