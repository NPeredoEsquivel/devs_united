import TweetCard from "./TweetCard/TweetCard.jsx";
import { StatesContext } from "../../../../hooks/StatesContext";
import { useContext } from "react";
import { firestore } from "../../../../Firebase";
import Loading from "../../../../components/common/Loading.jsx";

export default function TweetContainer() {

    const { tweetsArrayState } = useContext(StatesContext);

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
        <>
            <div className="tweet-list-container">
                {tweetsArrayState.tweetsArray.length ? (
                    tweetsArrayState.tweetsArray.map((tweet, i) =>
                        <TweetCard
                            key={i}
                            tweet={tweet}
                            likeTweetHandler={likeTweetHandler}
                            deleteTweet={deleteTweetHandler}
                        />
                    )
                ) : <Loading />
                }
            </div>
        </>
    );
}