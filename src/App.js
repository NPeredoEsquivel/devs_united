
import './App.css';
import { useEffect, useState } from 'react';
import { firestore, auth } from './Firebase';
//import hearth from './icons/hearth.svg'
import Body from './containers/Body/Body.jsx';
import Header from './containers/Header/Header.jsx';
import './styles/main.scss';

export const images = require.context('./icons', true);

function App() {
  const [tweets, setTweets] = useState([]);
  const [tweet, setTweet] = useState(
    {
      text: "",
      author: "",
      likes: "",
      uid: "",
      email: ""
    });
  const [user, setUser] = useState(null);

  useEffect(() => {
    const cancelSubs = firestore.collection("tweets")
      .onSnapshot((snapshot) => {
        const tweets = snapshot.docs.map((doc) => {
          return {
            text: doc.data().text,
            author: doc.data().author,
            likes: doc.data().likes,
            id: doc.id
          };
        });
        setTweets(tweets);
      });

    auth.onAuthStateChanged((user) => {
      setUser(user);
    })

    return () => cancelSubs;
  }, [])

  const handleChange = (e) => {
    let newTweet = {
      ...tweet,
      [e.target.name]: e.target.value
    }

    setTweet(newTweet);
  }

  const sendTweetHandler = (e) => {
    e.preventDefault();
    firestore.collection("tweets").add(tweet);
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
      <Header
        user={user}
      />
      <Body
        tweet={tweet}
        sendTweetHandler={sendTweetHandler}
        handleChange={handleChange}
        tweets={tweets}
        likeTweetHandler={likeTweetHandler}
        deleteTweet={deleteTweetHandler}
      />

    </div>
  );
}

export default App;
