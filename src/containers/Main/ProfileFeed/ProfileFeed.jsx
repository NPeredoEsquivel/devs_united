import { useContext } from "react";
import { useAuthState } from "../../../helper/Auth";
import { ProfileConfigurationContext } from "../../../hooks/ProfileConfiguration";
import Loading from "../../../components/Loading/Loading";
import Header from "./Header/Header";
import Body from "./Body/Body";

export default function ProfileFeed() {

    const { isAuthLoading } = useAuthState();
    const { isProfileLoading } = useContext(ProfileConfigurationContext);



    return (
        <>
            {
                !isAuthLoading && !isProfileLoading ? (
                    <>
                        <header className="profile-header-container">
                            <Header />
                        </header>
                        <div className="profile-main-container">
                            <Body />
                        </div>
                    </>
                )
                    :
                    <div className="loading-container">
                        <Loading />
                    </div>
            }
        </>
    );
}