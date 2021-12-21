import Button from "../../components/common/Button";
import { loginWithGoogle, auth, logOut } from "../../Firebase";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../hooks/AuthContext";
import { Navigate, Link } from "react-router-dom";

export default function Login() {
    const { currentUser, setCurrentUser } = useContext(AuthContext);

    useEffect(() => {
        auth.onAuthStateChanged((currentUser) => {
            setCurrentUser(currentUser);
        })

    }, []);
    return (
        <>
            {currentUser ? (
                <>
                    <div className="navbar-container__user">
                        <img src={currentUser.photoURL} alt="img" className="navbar-container__user__profile__pic" />
                        <p>¡Hola {currentUser.displayName}!</p>
                        <Link to="/" >Continue</Link>
                        <Button
                            buttonText="Log out"
                            onClickEvent={logOut}
                        />
                    </div>

                </>
            ) : (
                    <>
                        <div className="login-container">
                            <Button
                                buttonText="Login with Google"
                                onClickEvent={loginWithGoogle}
                            />
                        </div>
                    </>
                )}
        </>
    );
}
