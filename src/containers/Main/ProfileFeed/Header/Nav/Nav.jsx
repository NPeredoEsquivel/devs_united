import { useContext } from "react";
import { AuthContext } from "../../../../../hooks/AuthContext";
import { ProfileConfigurationContext } from "../../../../../hooks/ProfileConfiguration";
import Button from "./../../../../../components/Button";
import { logOut } from "./../../../../../Firebase";

export default function Nav() {
    const { currentUser, setCurrentUser } = useContext(AuthContext);
    const { nickName, setNickName, profileColor, setProfileColor } = useContext(ProfileConfigurationContext);

    let handleLogOut = () => {
        setCurrentUser(null);
        setNickName("");
        setProfileColor("");
        logOut();
    }


    return (
        <nav className="nav-container">
            <div className="nav-container__avatar">
                {nickName}
            </div>
            <div className="nav-container__logo">
                <Button
                    buttonText="Log out"
                    onClickEvent={handleLogOut}
                />
            </div>
        </nav>
    );
} 