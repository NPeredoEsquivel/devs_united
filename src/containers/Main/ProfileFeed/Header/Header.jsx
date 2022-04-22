import { useContext, memo } from "react";
import { AuthContext } from "../../../../hooks/ContextHooks/AuthContext";
import { ProfileConfigurationContext } from "../../../../hooks/ContextHooks/ProfileContext";
import Button from "../../../../components/Button/Button";
import { logOut } from "../../../../Firebase";
import { images } from "../../../../App";
import ImageContainer from "../../../../components/ImageContainer/ImageContainer";
import { useNavigate } from "react-router-dom";

function Header({ filteredUser }) {
    const { setCurrentUser } = useContext(AuthContext);
    const { profileConfiguration } = useContext(ProfileConfigurationContext);

    const nickName = profileConfiguration.nickName.getNickName;
    const setNickName = profileConfiguration.nickName.setNickName;
    const setProfileColor = profileConfiguration.profileColor.setProfileColor;

    const navigate = useNavigate();


    let handleLogOut = () => {
        setCurrentUser(null);
        setNickName("");
        setProfileColor("");
        logOut();
        navigate('/login');
    }


    return (
        <nav className="header-container">
            <div className="header-container__back-action">
                <Button
                    onClickEvent={() => navigate(-1)}
                    enableAnimation={true}
                >
                    <ImageContainer
                        className="header-container__back-action__svg"
                        imgSrc={images('./back-action.svg').default}
                        alternative="back-action"
                    />
                </Button>
            </div>
            <div className="header-container__nickname">
                {filteredUser.nickName}
            </div>
            <div className="header-container__button">
                {filteredUser.nickName === nickName ?
                    (
                        <Button
                            buttonText="Logout"
                            enableAnimation={true}
                            onClickEvent={handleLogOut}
                        >
                            <ImageContainer
                                className="logout-svg"
                                imgSrc={images('./logout-icon.svg').default}
                                alternative="logout-icon"
                            />
                        </Button>
                    ) : <></>
                }
            </div>
        </nav>
    );
}

export default memo(Header);