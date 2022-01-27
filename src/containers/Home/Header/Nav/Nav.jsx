import { useContext } from 'react';
import { images } from "../../../../App";
import { AuthContext } from "../../../../hooks/AuthContext";
import { ProfileConfigurationContext } from "../../../../hooks/ProfileConfiguration";
import { colors } from "../../../../hooks/ProfileConfiguration";

export default function Nav() {
    const { currentUser } = useContext(AuthContext);
    const { profileColor } = useContext(ProfileConfigurationContext);

    let imgBorder = colors.find(color =>
        color.hex === profileColor
    )

    return (
        <nav className="nav-container">
            <div className="nav-container__avatar">
                <img src={currentUser.photoURL} alt="img" className={`nav-container__avatar__${imgBorder.name}`} />
            </div>
            <div className="nav-container__logo">
                <img className="logo" src={images('./logo-mobile.svg').default} />
                <img className="title" src={images('./title-mobile.svg').default} />
            </div>
        </nav>
    );
} 