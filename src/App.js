
import './App.css';
import { useEffect, useState } from 'react';
import { firestore, loginWithGoogle, auth, logOut } from './Firebase';
//import hearth from './icons/hearth.svg'
import Body from './containers/Body/Body.jsx';
import './styles/main.scss';

export const images = require.context('./icons', true);

function App() {
  const [tweets, setTweets] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const cancelSubs = firestore.collection("tweets")
      .onSnapshot((snapshot) => {
        const tweets = snapshot.docs.map((doc) => {
          return {
            likes: doc.data().likes,
            id: doc.id
          };
        });
        setTweets(tweets);
      });

    auth.onAuthStateChanged((user) => {
      setUser(user);
      console.log(user);
    })
    return () => cancelSubs;
  }, [])

  const likeTweetHandler = (id, numLikes) => {
    if (!numLikes) {
      numLikes = 0;
    }
    firestore.doc(`tweets/${id}`).update({ likes: numLikes + 1 });
  }

  return (
    <div className="App">
      {user ? (
        <>
          <div className="user-profile">
            <img src={user.photoURL} alt="img" className="user-profile__pic" />
            <p>¡Hola {user.displayName}!</p>
            <button className="user-profile__logout" onClick={logOut}>Log out</button>
          </div>
        </>
      ) : (
          <button className="login-btn" onClick={loginWithGoogle}>
            Login with google
          </button>
        )}
      <Body
        tweets={tweets}
        likeTweetHandler={likeTweetHandler} />
    </div>
  );
}

export default App;
