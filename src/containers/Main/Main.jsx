import Body from "./Body/MainBody/Body";
import Header from "./Header/Header";
import { useAuthState } from "../../helper/Auth";
import { useContext } from "react";
import { ProfileConfigurationContext } from "../../hooks/ProfileConfiguration";
import Loading from "../../components/Loading/Loading";

export default function Home() {
    const { isAuthLoading } = useAuthState();
    const { isProfileLoading } = useContext(ProfileConfigurationContext);

    return (
        <>
            {!isAuthLoading && !isProfileLoading ? (
                <>
                    <header className="header-container">
                        <Header />
                    </header>
                    <div className="main-container">
                        <Body />
                    </div>
                    <footer className="footer-container">

                    </footer>
                </>
            ) :
                <div className="loading-container">
                    <Loading />
                </div>
            }
        </>
    );
}