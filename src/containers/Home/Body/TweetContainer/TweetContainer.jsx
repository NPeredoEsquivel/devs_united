import TweetCard from "./TweetCard/TweetCard.jsx";
import { StatesContext } from "../../../../hooks/StatesContext";
import { useContext } from "react";
import { firestore } from "../../../../Firebase";
import Loading from "../../../../components/Loading/Loading.jsx";
import { AuthContext } from "../../../../hooks/AuthContext";

export default function TweetContainer() {
    const { currentUser } = useContext(AuthContext);
    const { tweetsArrayState } = useContext(StatesContext);

    const deleteTweetHandler = (id) => {
        firestore.doc(`tweets/${id}`).delete();

    }

    const likeTweetHandler = (tweet) => {
        if (!tweet.likes) {
            tweet.likes = 0;
        }

        if (!tweet.userLikesArr) {
            tweet.userLikesArr = [];
        }

        let userLikesArr = tweet.userLikesArr;
        if (!userLikesArr.includes(currentUser.uid)) {
            userLikesArr.push(currentUser.uid);
            const updatedLikes = tweet.likes + 1;
            firestore.doc(`tweets/${tweet.id}`).update({ likes: updatedLikes, userLikesArr: userLikesArr });

        } else {
            let indexToDelete = userLikesArr.indexOf(currentUser.uid);
            userLikesArr.splice(indexToDelete, 1);
            const updatedLikes = tweet.likes - 1;
            firestore.doc(`tweets/${tweet.id}`).update({ likes: updatedLikes, userLikesArr: userLikesArr });

        }
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