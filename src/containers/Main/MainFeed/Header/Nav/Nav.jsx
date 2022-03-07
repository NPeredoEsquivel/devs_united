import { useContext } from "react";
import { images } from "../../../../../App";
import { AuthContext } from "../../../../../hooks/AuthContext";
import { ProfileConfigurationContext, colors } from "../../../../../hooks/ProfileConfiguration";
import ImageContainer from "../../../../../components/ImageContainer";
import { Link } from "react-router-dom";

export default function Nav() {
    const { currentUser } = useContext(AuthContext);
    const { nickName, profileColor } = useContext(ProfileConfigurationContext);

    let imgBorder = colors.find(color =>
        color.hex === profileColor
    )

    return (
        <nav className="nav-container">
            <div className="nav-container__avatar">
                <Link to={`/${nickName}`} >

                    <ImageContainer
                        className={`nav-container__avatar__${imgBorder.name}`}
                        imgSrc={currentUser.photoURL}
                    />
                </Link>
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