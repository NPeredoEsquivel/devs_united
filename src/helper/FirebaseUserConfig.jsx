import { firestore } from "../Firebase";

export default function FirebaseUserConfig(currentUser, nickName, profileColor) {
    async function filterUser(currentUser) {
        const userCollection = firestore.collection("user");
        let res = await userCollection.where("user_uid", "==", currentUser.uid).get();
        if (!res.empty) {
            let idDoc = await res.docs[0].id;
            firestore.doc(`user/${idDoc}`).update({
                nickname: nickName,
                profile_color: profileColor,
                profile_photo: currentUser.photoURL
            });


        } else {
            let user = {
                nickname: nickName,
                user_uid: currentUser.uid,
                profile_color: profileColor,
                profile_photo: currentUser.photoURL,
            };
            firestore.collection("user").add(user);
        }
    }
    filterUser(currentUser);
}