import { useAuthState } from "../../../../helper/Auth";
import { ProfileConfigurationContext } from "../../../../hooks/ProfileConfiguration";
import { loginWithGoogle, logOut } from "../../../../Firebase";
import Button from "../../../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { images } from "../../../../App";
import FirebaseUserConfig from "../../../../helper/FirebaseUserConfig";
import { useContext, useState } from "react";
import { FilterUserByNickName } from "../../../../helper/FilterUserFromCollection";

export default function BottomSection() {
    const { currentUser, setCurrentUser } = useAuthState();
    const { nickName, setNickName, profileColor, setProfileColor } = useContext(ProfileConfigurationContext);
    const navigate = useNavigate();

    const [validNickName, setValidNickName] = useState(true);
    let handleRedirect = (e, currentUser, nickName, profileColor) => {
        e.preventDefault();
        FilterUserByNickName(nickName).then(data => {
            if (data.userUid) {
                if (currentUser.uid != data.userUid) {
                    setValidNickName(false);
                } else {
                    FirebaseUserConfig(currentUser, nickName, profileColor);
                    navigate('/home');
                }
            } else {
                FirebaseUserConfig(currentUser, nickName, profileColor);
                navigate('/home');
            }
        });
    }

    console.log(validNickName);

    let handleLogOut = () => {
        setCurrentUser(null);
        setNickName("");
        setProfileColor("");
        logOut();
    }

    return (
        <div className="auth-container-body__button">
            <div className="button-container">
                {currentUser ? (
                    <>
                        <div className="button-container__redirect">
                            <Link to="/home"
                                className={`${nickName && profileColor && validNickName ? '' : 'disabled-link'}`}
                                onClick={(e) => `${nickName && profileColor ? handleRedirect(e, currentUser, nickName, profileColor) : e.preventDefault()}`} >
                                Continue
                            </Link>
                        </div>
                        <Button
                            buttonText="Log out"
                            onClickEvent={handleLogOut}
                        />
                    </>
                ) : (
                        <div className="button-container__login">
                            <div className="button-container__login__img-container">
                                <img src={images('./google-icon.svg').default} alt="google-login-icon" />
                            </div>
                            <Button
                                buttonText="Sign in with Google"
                                buttonClass="button-container__login__button"
                                onClickEvent={loginWithGoogle}
                            />
                        </div>
                    )}
            </div>
        </div >
    );
}