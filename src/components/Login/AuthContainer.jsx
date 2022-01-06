import TextContainer from "../common/TextContainer";
import ColorSelector from "../Login/ColorSelector";
import InputText from "../common/InputText";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import { images } from "../../App";
import { loginWithGoogle, logOut } from "../../Firebase";

export function AuthContainerTitle({ currentUser }) {

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

export function AuthContainerBody({ currentUser }) {
    return (
        <div className="auth-container-body__body">
            {currentUser ? (
                <>
                    <div className="body__input">
                        <InputText
                            placeHolder="Type your username"
                        />
                    </div>
                    <div className="body__color-picker">
                        <TextContainer
                            className="color-picker__title"
                            contentText="Select your favorite color"
                        />
                        <div className="color-picker__colors">
                            <ColorSelector color="red" />
                            <ColorSelector color="orange" />
                            <ColorSelector color="yellow" />
                            <ColorSelector color="green" />
                            <ColorSelector color="light-blue" />
                            <ColorSelector color="purple" />
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

export function AuthContainerButton({ currentUser }) {
    return (
        <div className="auth-container-body__button">
            <div className="button-container">
                {currentUser ? (

                    <>
                        <div className="button-container__redirect">
                            <Link to="/" >Continue</Link>
                        </div>
                        <Button
                            buttonText="Log out"
                            onClickEvent={logOut}
                        />
                    </>
                ) : (
                        <div className="button-container__login">
                            <div className="button-container__login__img-container">
                                <img src={images('./google-icon.svg').default} />
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

