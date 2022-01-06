
import { useContext } from 'react';
import { images } from "../../../App";
import { AuthContext } from "../../../hooks/AuthContext";

function Header() {
    const { currentUser } = useContext(AuthContext);
    return (
        <header>
            <nav className="nav-container">
                <img src={currentUser.photoURL} alt="img" className="navbar-container__user__profile__pic" />
                <img src={images('./title-mobile.svg')} />
            </nav>
        </header>
    );
}

export default Header;