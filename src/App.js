
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
      <Header
        user={user}
      />
      <Body
        tweets={tweets}
        likeTweetHandler={likeTweetHandler}
      />
    </div>
  );
}

export default App;
