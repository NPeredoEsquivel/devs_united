import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ProfileConfigurationContext } from "../../hooks/ContextHooks/ProfileContext";
import Loading from "../../components/Loading/Loading";

function ProfileConfiguratedRoute({ children }) {
    const { profileConfiguration, isProfileLoading } = useContext(ProfileConfigurationContext);

    const nickNameConfigured = profileConfiguration.nickName.getNickName;
    const profileColorConfigured = profileConfiguration.profileColor.getProfileColor;
    const isProfileConfigured = (nickNameConfigured && profileColorConfigured) && true;


    return (
        !isProfileLoading ? (isProfileConfigured ? children : <Navigate to={"/login"} />)
            : <div className="loading-container">
                <Loading />
            </div>

    );
};

export default ProfileConfiguratedRoute;