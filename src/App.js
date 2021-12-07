
import './App.css';
import { useEffect, useState, useContext } from 'react';
import { firestore, auth } from './Firebase';
//import hearth from './icons/hearth.svg'
import Body from './containers/Body/Body.jsx';
import Header from './containers/Header/Header.jsx';
import './styles/main.scss';
import { StatesContext } from './hooks/StatesContext';

export const images = require.context('./icons', true);

function App() {
  const { tweetsArrayState, tweetState, userState } = useContext(StatesContext);

  useEffect(() => {
    const cancelSubs = firestore.collection("tweets")
      .onSnapshot((snapshot) => {
        const tweets = snapshot.docs.map((doc) => {
          return {
            text: doc.data().text,
            author: doc.data().author,
            likes: doc.data().likes,
            email: doc.data().email,
            id: doc.id,
            uid: doc.data().uid
          };
        });
        tweetState.setTweet({
          text: "",
          author: "",
          uid: "",
          email: ""
        })
        tweetsArrayState.setTweets(tweets);
      });
    let currentUser = userState.user;
    auth.onAuthStateChanged((currentUser) => {
      userState.setUser(currentUser);
    })

    return () => cancelSubs;
  }, [])

  const handleChange = (e) => {
    let newTweet = {
      text: e.target.value,
      author: userState.user.displayName,
      uid: userState.user.uid,
      email: userState.user.email,
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
        handleChange={handleChange}
        likeTweetHandler={likeTweetHandler}
        deleteTweet={deleteTweetHandler}
      />

    </div>
  );
}

export default App;
