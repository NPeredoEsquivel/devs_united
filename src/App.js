
import './App.css';
import { useEffect, useContext } from 'react';
import { firestore, auth, serverTimestamp, query, orderBy } from './Firebase';
import './styles/main.scss';
import { StatesContext } from './hooks/StatesContext';
import { Link, Route, Routes } from "react-router-dom";
import Login from './containers/Login/Login';
import Home from './containers/Home/Home';
import PrivateRoute from "./containers/Routes/PrivateRoute";
import { useAuthState } from "./helper/auth";
export const images = require.context('./icons', true);

function App() {
  const { tweetsArrayState, tweetState, userState } = useContext(StatesContext);


  const { isAuthenticated } = useAuthState();

  console.log(isAuthenticated);

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
      <>
        <Routes>
          <Route exact path="/" element={
            <PrivateRoute>
              <Home
                sendTweetHandler={sendTweetHandler}
                handleChange={handleChange}
                likeTweetHandler={likeTweetHandler}
                deleteTweet={deleteTweetHandler}
              />
            </PrivateRoute>
          } />
          <Route exact path="/profilerr" element={
            <PrivateRoute>
              <Home
                sendTweetHandler={sendTweetHandler}
                handleChange={handleChange}
                likeTweetHandler={likeTweetHandler}
                deleteTweet={deleteTweetHandler}
              />
            </PrivateRoute>
          } />
          <Route path="/login" element={<Login />} />
        </Routes>

      </>
    </div>
  );
}

export default App;
