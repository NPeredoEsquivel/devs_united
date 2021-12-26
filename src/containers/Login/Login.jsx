import Button from "../../components/common/Button";
import ColorSelector from "../../components/Login/ColorSelector";
import { loginWithGoogle, auth, logOut } from "../../Firebase";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../hooks/AuthContext";
import { Link } from "react-router-dom";
import { images } from "../../App";
export default function Login() {
    const { currentUser, setCurrentUser } = useContext(AuthContext);

    useEffect(() => {
        auth.onAuthStateChanged((currentUser) => {
            setCurrentUser(currentUser);
        })

    }, []);
    let date = new Date().getFullYear();
    return (
        <div className="login-container">
            <div className="logo-container">
                <img className="logo-container__logo" src={images('./logo-mobile.svg').default} />
                <img className="logo-container__title" src={images('./title-mobile.svg').default} />
            </div>



            <div className="auth-container">
                <div className="auth-container-body">
                    <div className="auth-container-body__title">
                        {currentUser ? (
                            <>
                                WELCOME < br ></br><span>{currentUser.displayName}</span>
                            </>
                        ) : (
                                <>
                                    LOREM <br></br>IPSUM DOLOR
                             </>
                            )}
                    </div>
                    <div className="auth-container-body__body">
                        {currentUser ? (
                            <>
                                <div className="body__input">
                                    <input placeholder="Type your username"></input>
                                </div>
                                <div className="body__color-picker">
                                    <p className="color-picker__title">
                                        Select your favorite color
                                    </p>
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
                                <>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </>
                            )}
                    </div>
                    <div className="auth-container-body__button">
                        <div className="button-container">
                            {currentUser ? (
                                <>
                                    <Link to="/" >Continue</Link>
                                    <Button
                                        buttonText="Log out"
                                        onClickEvent={logOut}
                                    />
                                </>
                            ) : (
                                    <>
                                        <div className="button-container__img-container">
                                            <img src={images('./google-icon.svg').default} />
                                        </div>
                                        <Button
                                            buttonText="Sign in with Google"
                                            buttonClass="button-container__button"
                                            onClickEvent={loginWithGoogle}
                                        />
                                    </>
                                )}

                        </div>
                    </div>
                </div>

                {/* {currentUser ? (
                    <div className="auth-container__body-text">
                        <div className="title">
                            WELCOME <br></br><span>{currentUser.displayName}</span>
                        </div>
                        <div className="body">
                            <div className="body__input">
                                <input placeholder="Type your username"></input>
                            </div>
                            <div className="body__color-picker">
                                <p className="color-picker__title">
                                    Select your favorite color
                                </p>
                                <div className="color-picker__colors">

                                </div>
                            </div>
                        </div>
                        <Link to="/" >Continue</Link>
                    </div>
                     <div className="navbar-container__user">
                         <img src={currentUser.photoURL} alt="img" className="navbar-container__user__profile__pic" /> 
                        
                        <Link to="/" >Continue</Link>
                        <Button
                            buttonText="Log out"
                            onClickEvent={logOut}
                        />
                    </div> 
                ) : (
                        <>
                            <div className="auth-container__body-text">
                                <div className="title">
                                    LOREM <br></br>IPSUM DOLOR
                                </div>

                                <div className="body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </div>
                            </div>
                            <div className="button-container">
                                <div className="button-container__img-container">
                                    <img src={images('./google-icon.svg').default} />
                                </div>
                                <Button
                                    buttonText="Sign in with Google"
                                    buttonClass="button-container__button"
                                    onClickEvent={loginWithGoogle}
                                />
                            </div>
                        </>
                    )
                } */}
            </div>


            <div className="login-footer-container">
                &copy; {date} Devs_Unided - <span>BETA</span>
            </div>
        </div>
    );
}
