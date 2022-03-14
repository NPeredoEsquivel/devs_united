import { useContext } from "react";
import { images } from "../../../../App";
import { AuthContext } from "../../../../hooks/ContextHooks/AuthContext";
import { ProfileConfigurationContext, colors } from "../../../../hooks/ContextHooks/ProfileContext";
import ImageContainer from "../../../../components/ImageContainer/ImageContainer";
import { Link } from "react-router-dom";
import FindTweetAuthorColor from "../../../../utils/helper/TweetAuthorColor";

export default function Header() {
    const { currentUser } = useContext(AuthContext);
    const { nickName, profileColor } = useContext(ProfileConfigurationContext);
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