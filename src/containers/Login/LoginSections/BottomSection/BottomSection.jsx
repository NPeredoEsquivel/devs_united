import { useAuthState } from "../../../../hooks/CustomHooks/AuthHook";
import { ProfileConfigurationContext } from "../../../../hooks/ContextHooks/ProfileContext";
import { loginWithGoogle } from "../../../../Firebase";
import Button from "../../../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { images } from "../../../../App";
import FirebaseUserConfig from "../../../../utils/helper/FirebaseUserConfig";
import { useContext } from "react";

function BottomSection() {
    const { currentUser } = useAuthState();
    const { profileConfiguration } = useContext(ProfileConfigurationContext);
    const navigate = useNavigate();

    const nickNameConfigured = profileConfiguration.nickName.getNickName;
    const profileColorConfigured = profileConfiguration.profileColor.getProfileColor;
    const isNickNameUnique = profileConfiguration.nickName.isNickNameUnique;

    let handleRedirect = (e, currentUser, nickNameConfigured, profileColorConfigured) => {
        e.preventDefault();
        FirebaseUserConfig(currentUser, nickNameConfigured, profileColorConfigured);
        navigate('/home');
    }

    return (
        <div className="auth-container-body__button">
            <div className="button-container">
                {currentUser ? (
                    <>
                        <div className="button-container__redirect">
                            <Link to="/home"
                                className={`${nickNameConfigured && profileColorConfigured && isNickNameUnique ? '' : 'disabled-link'}`}
                                onClick={(e) => `${nickNameConfigured && profileColorConfigured ? handleRedirect(e, currentUser, nickNameConfigured, profileColorConfigured) : e.preventDefault()}`} >
                                Continue
                            </Link>
                        </div>
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

export default BottomSection;