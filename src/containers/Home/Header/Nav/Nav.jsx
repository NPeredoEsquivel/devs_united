import { useContext } from "react";
import { images } from "../../../../App";
import { AuthContext } from "../../../../hooks/AuthContext";
import { ProfileConfigurationContext } from "../../../../hooks/ProfileConfiguration";
import { colors } from "../../../../hooks/ProfileConfiguration";
import ProfilePhoto from "../../../../components/ProfilePhoto";
import ImageContainer from "../../../../components/ImageContainer";
export default function Nav() {
    const { currentUser } = useContext(AuthContext);
    const { profileColor } = useContext(ProfileConfigurationContext);

    let imgBorder = colors.find(color =>
        color.hex === profileColor
    )

    return (
        <nav className="nav-container">
            <div className="nav-container__avatar">
                <ProfilePhoto
                    className={`nav-container__avatar__${imgBorder.name}`}
                    imgSrc={currentUser.photoURL}
                />
            </div>
            <div className="nav-container__logo">
                <ImageContainer
                    imgSrc={images('./logo-mobile.svg').default}
                    className={"logo"}
                />
                <ImageContainer
                    imgSrc={images('./title-mobile.svg').default}
                    className={"title"}
                />
            </div>
        </nav>
    );
} 