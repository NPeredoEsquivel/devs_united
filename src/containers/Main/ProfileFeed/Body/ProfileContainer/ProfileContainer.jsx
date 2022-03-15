import ImageContainer from "../../../../../components/ImageContainer/ImageContainer";
import { colors } from "../../../../../hooks/ContextHooks/ProfileContext";

function ProfileContainer({ profileUser }) {
    let imgBorder = colors.find(color =>
        color.hex === profileUser.filteredUser.profileColor
    )
    return (
        <div className="profile-information">
            <ImageContainer
                className={`profile-information__avatar__${imgBorder.name}`}
                imgSrc={profileUser.filteredUser.profileUrlPhoto}
            />
            <div className="profile-information__nickname">
                <span className={`profile-information__nickname__${imgBorder.name}`}>
                    {profileUser.filteredUser.nickName}
                </span>
            </div>
        </div>
    );
}

export default ProfileContainer;