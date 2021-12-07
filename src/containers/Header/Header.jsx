import Button from '../../components/Button'
import { loginWithGoogle, logOut } from '../../Firebase';

function Header({ user }) {
    return (
        <header>
            <div className="navbar-container">
                {user ? (
                    <>
                        <div className="navbar-container__user">
                            <img src={user.photoURL} alt="img" className="navbar-container__user__profile__pic" />
                            <p>¡Hola {user.displayName}!</p>
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