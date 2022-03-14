import {
    firestore
} from "../../Firebase";


export const likeTweetHandler = (tweet, currentUser) => {
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
        firestore.doc(`tweets/${tweet.id}`).update({
            likes: updatedLikes,
            userLikesArr: userLikesArr
        });

    } else {
        let indexToDelete = userLikesArr.indexOf(currentUser.uid);
        userLikesArr.splice(indexToDelete, 1);
        const updatedLikes = tweet.likes - 1;
        firestore.doc(`tweets/${tweet.id}`).update({
            likes: updatedLikes,
            userLikesArr: userLikesArr
        });

    }
}