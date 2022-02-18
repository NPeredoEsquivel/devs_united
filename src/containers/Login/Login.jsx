
import { AuthContainerTitle, AuthContainerBody, AuthContainerButton } from "./AuthContainer/AuthContainer";
import { images } from "../../App";
import { useAuthState } from "../../helper/Auth";
import Loading from "../../components/common/Loading";

export default function Login() {
    const { isAuthLoading } = useAuthState();

    let date = new Date().getFullYear();
    return (
        <div className="App login-container">
            <div className="logo-container">
                <img className="logo-container__logo" src={images('./logo-mobile.svg').default} alt="logo-mobile" />
                <img className="logo-container__title" src={images('./title-mobile.svg').default} alt="title-mobile" />
            </div>


            {!isAuthLoading ? (
                <div className="auth-container">
                    <div className="auth-container-body">
                        <AuthContainerTitle />
                        <AuthContainerBody />
                        <AuthContainerButton />
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
