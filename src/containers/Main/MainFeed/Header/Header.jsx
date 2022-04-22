import { useContext, memo } from "react";
import { images } from "../../../../App";
import { AuthContext } from "../../../../hooks/ContextHooks/AuthContext";
import { ProfileConfigurationContext } from "../../../../hooks/ContextHooks/ProfileContext";
import ImageContainer from "../../../../components/ImageContainer/ImageContainer";
import { Link } from "react-router-dom";
import FindTweetAuthorColor from "../../../../utils/helper/TweetAuthorColor";

function Header() {
    const { currentUser } = useContext(AuthContext);
    const { profileConfiguration } = useContext(ProfileConfigurationContext);

    const nickName = profileConfiguration.nickName.getNickName;
    const profileColor = profileConfiguration.profileColor.getProfileColor;

    let imgBorder = FindTweetAuthorColor(profileColor);

    return (
        <nav className="header-container">
            <div className="header-container__avatar">
                <Link to={`/${nickName}`} >

                    <ImageContainer
                        className={`header-container__avatar__${imgBorder.name}`}
                        imgSrc={currentUser.photoURL}
                    />
                </Link>
            </div>
            <div className="header-container__logo">
                <ImageContainer
                    imgSrc={images('./logo-small.svg').default}
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

export default memo(Header);