import ProfileContainer from "./ProfileContainer/ProfileContainer";
import ProfileTweetContainer from "./ProfileTweetContainer/ProfileTweetContainer";

export default function ProfileBody() {
    return (
        <div className="profile-body-container">
            <ProfileContainer />
            <ProfileTweetContainer />
        </div>
    );
}