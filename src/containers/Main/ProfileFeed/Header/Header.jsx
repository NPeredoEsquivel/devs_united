import { useContext } from "react";
import { AuthContext } from "../../../../hooks/ContextHooks/AuthContext";
import { ProfileConfigurationContext } from "../../../../hooks/ContextHooks/ProfileContext";
import Button from "../../../../components/Button/Button";
import { logOut } from "../../../../Firebase";
import { images } from "../../../../App";
import ImageContainer from "../../../../components/ImageContainer/ImageContainer";
import { Link, useNavigate, useParams } from "react-router-dom";

function Header() {
    const { setCurrentUser } = useContext(AuthContext);
    const { nickName, setNickName, setProfileColor } = useContext(ProfileConfigurationContext);
    const navigate = useNavigate();

    let handleLogOut = () => {
        setCurrentUser(null);
        setNickName("");
        setProfileColor("");
        logOut();
        navigate('/login');
    }

    const { profileNickName } = useParams();

    return (
        <nav className="header-container">
            <div className="header-container__back-action">
                <Button
                    onClickEvent={() => navigate(-1)}
                    childrenComponent={
                        <ImageContainer
                            className="header-container__back-action__svg"
                            imgSrc={images('./back-action.svg').default}
                            alternative="back-action"
                        />
                    }
                />
            </div>
            <div className="header-container__nickname">
                {profileNickName}
            </div>
            <div className="header-container__button">
                {profileNickName === nickName ?
                    (
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
                    ) : <></>
                }
            </div>
        </nav>
    );
}

export default Header;