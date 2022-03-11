import TitleSection from "./LoginSections/TitleSection/TitleSection";
import BodySection from "./LoginSections/BodySection/BodySection";
import BottomSection from "./LoginSections/BottomSection/BottomSection";
import { images } from "../../App";
import { useAuthState } from "../../hooks/CustomHooks/AuthHook";
import Loading from "../../components/Loading/Loading";

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
                        <TitleSection />
                        <BodySection />
                        <BottomSection />
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
