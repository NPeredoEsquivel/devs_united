import TitleSection from "./LoginSections/TitleSection/TitleSection";
import BodySection from "./LoginSections/BodySection/BodySection";
import BottomSection from "./LoginSections/BottomSection/BottomSection";
import Footer from "../../components/Footer/Footer";
import ImageContainer from "../../components/ImageContainer/ImageContainer";
import { images } from "../../App";
import { useAuthState } from "../../hooks/CustomHooks/AuthHook";
import { useWindowWidth } from "../../hooks/CustomHooks/CustomWidthHook";
import Loading from "../../components/Loading/Loading";

function Login() {
    const { isAuthLoading } = useAuthState();
    let windowWidth = useWindowWidth();
    return (
        <div className="App login-container">
            <div className="logo-container">
                {windowWidth > 1024 ?
                    <ImageContainer imgSrc={images('./logo-desktop.svg').default} className="logo-container__logo-desktop" alternative="logo-desktop" />
                    :
                    <ImageContainer imgSrc={images('./logo-mobile.svg').default} className="logo-container__logo-mobile" alternative="logo-mobile" />
                }
            </div>
            {!isAuthLoading ? (
                <div className="auth-container">
                    <div className="auth-container__body">
                        <TitleSection />
                        <BodySection />
                        <BottomSection />
                    </div>
                    <Footer className="auth-container__footer" />
                </div>
            ) : <Loading />
            }
        </div>
    );
}

export default Login;