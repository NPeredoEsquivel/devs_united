import { firestore } from "../Firebase";

export async function FilterUserByUid(uid) {
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

export async function FilterUserByNickName(nickName) {
    const userCollection = firestore.collection("user");
    let res = await userCollection.where("nickname", "==", nickName).get();

    if (!res.empty) {
        let data = res.docs[0].data();
        return {
            'userUid': data.user_uid,
            'nickName': data.nickname,
            'profileColor': data.profile_color,
            'profileUrlPhoto': data.profile_photo,
        }
    } else {
        return {
            'userUid': null,
            'nickName': null,
            'profileColor': null,
            'profileUrlPhoto': null,
        }
    }
}