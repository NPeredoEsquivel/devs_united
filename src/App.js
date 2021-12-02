
import './App.css';
import { useEffect, useState } from 'react';
import { firestore, loginWithGoogle, auth, logOut } from './Firebase';
import hearth from './icons/hearth.svg'


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
      <TweetCard tweets={tweets} likeTweetHandler={likeTweetHandler} />
    </div>
  );
}

function TweetCard({ tweets, likeTweetHandler }) {
  return (
    tweets.map((tweet, i) =>
      <div className="tweet__card">
        <div className="icons">
          <span>{tweet.likes ? tweet.likes : "0"}</span><span className="like__span" onClick={() => likeTweetHandler(tweet.id, tweet.likes)}><img height="13px" alt="hearth" src={hearth}></img></span>
        </div>
      </div>
    ));

}

export default App;
