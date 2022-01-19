
import { AuthContainerTitle, AuthContainerBody, AuthContainerButton } from "../../components/Login/AuthContainer";
import { useContext } from "react";
import { AuthContext } from "../../hooks/AuthContext";
import { ProfileConfigurationContext } from "../../hooks/ProfileConfiguration";
import { images } from "../../App";
import { useAuthState } from "../../helper/Auth";
import Loading from "../../components/common/Loading";
export default function Login() {
    const { currentUser } = useContext(AuthContext);
    const { isAuthLoading } = useAuthState();
    const { isProfileLoading } = useContext(ProfileConfigurationContext);

    let date = new Date().getFullYear();
    return (
        <div className="login-container">
            <div className="logo-container">
                <img className="logo-container__logo" src={images('./logo-mobile.svg').default} />
                <img className="logo-container__title" src={images('./title-mobile.svg').default} />
            </div>


            {!isAuthLoading && !isProfileLoading ? (
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
            ) : <Loading />
            }


            <div className="login-footer-container">
                &copy; {date} Devs_Unided - <span>BETA</span>
            </div>
        </div>
    );
}
