import { firestore } from "../Firebase";

export default async function filterUser(uid) {
    const userCollection = firestore.collection("user");
    let res = await userCollection.where("user_uid", "==", uid).get();

    if (!res.empty) {
        let data = res.docs[0].data();
        return {
            'nickname': data.nickname,
            'color': data.profile_color
        }
    } else {
        return {
            'nickname': null,
            'color': null
        }
    }
}