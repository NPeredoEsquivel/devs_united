import ImageContainer from "../../../../../components/ImageContainer/ImageContainer";
import Span from "../../../../../components/Span/Span";
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
                <Span
                    className={`profile-information__nickname__${imgBorder.name}`}
                    contentOfSpan={profileUser.filteredUser.nickName}
                />
            </div>
        </div>
    );
}

export default ProfileContainer;