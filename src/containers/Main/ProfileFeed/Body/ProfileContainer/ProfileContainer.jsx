import ImageContainer from "../../../../../components/ImageContainer";
import { useContext } from "react";
import { ProfileConfigurationContext, colors } from "../../../../../hooks/ProfileConfiguration";
import { AuthContext } from "../../../../../hooks/AuthContext";

export default function ProfileContainer() {
    const { currentUser } = useContext(AuthContext);
    const { nickName, profileColor } = useContext(ProfileConfigurationContext);

    let imgBorder = colors.find(color =>
        color.hex === profileColor
    )
    return (
        <div className="profile-information">
            <ImageContainer
                className={`profile-information__avatar__${imgBorder.name}`}
                imgSrc={currentUser.photoURL}
            />
            <div className="profile-information__nickname">
                <span className={`profile-information__nickname__${imgBorder.name}`}>
                    {nickName}
                </span>
            </div>
        </div>
    );
}