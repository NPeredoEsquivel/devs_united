import TextContainer from "../../../components/common/TextContainer";
import ColorSelector from "../../../components/common/ColorSelector";
import InputText, { LoadingInputText } from "../../../components/common/InputText";
import Button from "../../../components/common/Button";
import { Link, useNavigate } from "react-router-dom";
import { images } from "../../../App";
import { loginWithGoogle, logOut } from "../../../Firebase";
import { ProfileConfigurationContext } from "../../../hooks/ProfileConfiguration";
import { colors } from "../../../hooks/ProfileConfiguration";
import { useContext } from "react";
import firebaseUserConfig from "../../../helper/FirebaseUserConfig";
import { AuthContext } from "../../../hooks/AuthContext";

export function AuthContainerTitle() {
    const { currentUser } = useContext(AuthContext);

    const htmlContent = currentUser ?
        <>WELCOME <br></br> <span>{currentUser.displayName}</span></> :
        <>LOREM <br></br>IPSUM DOLOR</>;

    return (
        <div className="auth-container-body__title">

            {currentUser ? (
                <TextContainer
                    contentText={htmlContent}
                    className="auth-container-body__title__text"
                />

            ) : (
                    <TextContainer
                        contentText={htmlContent}
                        className="auth-container-body__title__text"
                    />
                )
            }
        </div>
    );
}

export function AuthContainerBody() {
    const { currentUser } = useContext(AuthContext);

    const { nickName, setNickName, profileColor } = useContext(ProfileConfigurationContext);
    let handleValueChange = (e) => {
        setNickName(e.target.value);
    }

    return (
        <div className="auth-container-body__body">
            {currentUser ? (
                <>
                    <div className="body-input">
                        {nickName ? (
                            <InputText
                                placeHolder="Type your username"
                                inputValue={nickName ?? ''}
                                handleValue={handleValueChange}
                            />
                        ) : <LoadingInputText
                                className="body-input__loading-input" />
                        }
                    </div>
                    <div className="body__color-picker">
                        <TextContainer
                            className="color-picker__title"
                            contentText="Select your favorite color"
                        />
                        <div className="color-picker__selector">
                            {colors.map(color => {
                                return <ColorSelector
                                    key={color.hex}
                                    hexColor={color.hex}
                                    className={profileColor ? (`color-picker__selector__color ${color.name} ${profileColor === color.hex ? "selected" : ""}`) : "color-picker__selector__loading"}
                                />
                            })}
                        </div>
                    </div>
                </>
            ) : (
                    <TextContainer
                        className=""
                        contentText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    />
                )}
        </div>
    );
}

export function AuthContainerButton() {
    const { currentUser } = useContext(AuthContext);
    const { nickName, profileColor } = useContext(ProfileConfigurationContext);
    const navigate = useNavigate();

    let handleRedirect = (e, currentUser, nickName, profileColor) => {
        e.preventDefault();
        firebaseUserConfig(currentUser, nickName, profileColor);
        navigate('/');
    }
    return (
        <div className="auth-container-body__button">
            <div className="button-container">
                {currentUser ? (

                    <>
                        <div className="button-container__redirect">
                            <Link to="/" className={`${nickName && profileColor ? '' : 'disabled-link'}`} onClick={(e) => `${nickName && profileColor ? handleRedirect(e, currentUser, nickName, profileColor) : e.preventDefault()}`} >Continue</Link>
                        </div>
                        <Button
                            buttonText="Log out"
                            onClickEvent={logOut}
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

