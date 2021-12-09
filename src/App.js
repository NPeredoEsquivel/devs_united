
import './App.css';
import { useEffect, useContext } from 'react';
import { firestore, auth, serverTimestamp, query, orderBy } from './Firebase';
import Body from './containers/Body/Body.jsx';
import Header from './containers/Header/Header.jsx';
import './styles/main.scss';
import { StatesContext } from './hooks/StatesContext';

export const images = require.context('./icons', true);

function App() {
  const { tweetsArrayState, tweetState, userState } = useContext(StatesContext);

  useEffect(() => {
    const collection = firestore.collection("tweets");
    const orderedCollection = collection.orderBy("timestamp", "desc");
    const subs = orderedCollection.onSnapshot((snapshot) => {
      const tweets = snapshot.docs.map((doc) => {
        return {
          text: doc.data().text,
          author: doc.data().author,
          photoURL: doc.data().photoURL,
          likes: doc.data().likes,
          email: doc.data().email,
          timestamp: doc.data().timestamp,
          id: doc.id,
          uid: doc.data().uid
        };
      });

      tweetState.setTweet({
        text: "",
        author: "",
        photoURL: "",
        email: "",
        timestamp: "",
        uid: "",
      })
      tweetsArrayState.setTweets(tweets);
    });

    let currentUser = userState.user;
    auth.onAuthStateChanged((currentUser) => {
      userState.setUser(currentUser);
    })

    return () => subs;
  }, [])

  const handleChange = (e) => {
    let newTweet = {
      text: e.target.value,
      author: userState.user.displayName,
      photoURL: userState.user.photoURL,
      uid: userState.user.uid,
      email: userState.user.email,
      timestamp: serverTimestamp
    };
    tweetState.setTweet(newTweet);
  }

  const sendTweetHandler = (e) => {
    e.preventDefault();
    firestore.collection("tweets").add(tweetState.tweet);
  }

  const deleteTweetHandler = (id) => {
    firestore.doc(`tweets/${id}`).delete();

  }

  const likeTweetHandler = (id, numLikes) => {
    if (!numLikes) {
      numLikes = 0;
    }
    firestore.doc(`tweets/${id}`).update({ likes: numLikes + 1 });
  }

  return (
    <div className="App">
      <Header />
      <Body
        sendTweetHandler={sendTweetHandler}
        handleChange={handleChange}
        likeTweetHandler={likeTweetHandler}
        deleteTweet={deleteTweetHandler}
      />

    </div>
  );
}

export default App;
