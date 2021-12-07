import Button from '../../components/Button'
import { loginWithGoogle, logOut } from '../../Firebase';
import { StatesContext } from '../../hooks/StatesContext';
import { useContext } from 'react';

function Header() {
    const { userState } = useContext(StatesContext);
    return (
        <header>
            <div className="navbar-container">
                {userState.user ? (
                    <>
                        <div className="navbar-container__user">
                            <img src={userState.user.photoURL} alt="img" className="navbar-container__user__profile__pic" />
                            <p>¡Hola {userState.user.displayName}!</p>
                            <button className="navbar-container__user__profile__logout" onClick={logOut}>Log out</button>
                        </div>
                    </>
                ) : (
                        <div className="navbar-container__button-container">
                            <Button
                                buttonText="Login with Google"
                                onClickEvent={loginWithGoogle}
                            />

                        </div>
                    )}

            </div>
        </header>
    );
}

export default Header;