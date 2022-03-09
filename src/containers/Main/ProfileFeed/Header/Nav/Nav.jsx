import { useContext } from "react";
import { AuthContext } from "../../../../../hooks/AuthContext";
import { ProfileConfigurationContext } from "../../../../../hooks/ProfileConfiguration";
import Button from "./../../../../../components/Button";
import { logOut } from "./../../../../../Firebase";
import { images } from "../../../../../App";
import ImageContainer from "../../../../../components/ImageContainer";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Nav() {
    const { setCurrentUser } = useContext(AuthContext);
    const { setNickName, setProfileColor } = useContext(ProfileConfigurationContext);
    const navigate = useNavigate();

    let handleLogOut = () => {
        setCurrentUser(null);
        setNickName("");
        setProfileColor("");
        logOut();
        navigate('/login');
    }

    const { nickName } = useParams();

    return (
        <nav className="nav-container">

            <div className="nav-container__back-action">
                <Link to="/home">
                    <ImageContainer
                        className="nav-container__back-action__svg"
                        imgSrc={images('./back-action.svg').default}
                        alternative="back-action"
                    />
                </Link>
            </div>
            <div className="nav-container__nickname">
                {nickName}
            </div>
            <div className="nav-container__button">
                <Button
                    buttonText="Logout"
                    childrenComponent={
                        <ImageContainer
                            className="logout-svg"
                            imgSrc={images('./logout-icon.svg').default}
                            alternative="logout-icon"
                        />
                    }
                    onClickEvent={handleLogOut}
                />
            </div>
        </nav>
    );
} 