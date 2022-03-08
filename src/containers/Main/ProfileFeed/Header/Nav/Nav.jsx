import { useContext } from "react";
import { AuthContext } from "../../../../../hooks/AuthContext";
import { ProfileConfigurationContext } from "../../../../../hooks/ProfileConfiguration";
import Button from "./../../../../../components/Button";
import { logOut } from "./../../../../../Firebase";
import { images } from "../../../../../App";
import ImageContainer from "../../../../../components/ImageContainer";
import { useNavigate } from "react-router-dom";

export default function Nav() {
    const { currentUser, setCurrentUser } = useContext(AuthContext);
    const { nickName, setNickName, profileColor, setProfileColor } = useContext(ProfileConfigurationContext);
    const navigate = useNavigate();

    let handleLogOut = () => {
        setCurrentUser(null);
        setNickName("");
        setProfileColor("");
        logOut();
        navigate('/login');
    }


    return (
        <nav className="nav-container">

            <div className="nav-container__back-action">
                <ImageContainer
                    className="nav-container__back-action__svg"
                    imgSrc={images('./back-action.svg').default}
                    alternative="back-action"
                />
            </div>
            <div className="nav-container__nickname">
                {nickName}
            </div>
            <div className="nav-container__button">
                <Button
                    buttonText="Logout"
                    childrenComponent={
                        <ImageContainer
                            className="logout-svg"
                            imgSrc={images('./logout-icon.svg').default}
                            alternative="logout-icon"
                        />
                    }
                    onClickEvent={handleLogOut}
                />
            </div>
        </nav>
    );
} 