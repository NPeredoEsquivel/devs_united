import Button from "../../components/common/Button";
import { AuthContainerTitle, AuthContainerBody, AuthContainerButton } from "../../components/Login/AuthContainer";
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
                    <AuthContainerTitle
                        currentUser={currentUser}
                    />
                    <AuthContainerBody
                        currentUser={currentUser}
                    />

                    <AuthContainerButton
                        currentUser={currentUser}
                    />
                </div>
            </div>


            <div className="login-footer-container">
                &copy; {date} Devs_Unided - <span>BETA</span>
            </div>
        </div>
    );
}
