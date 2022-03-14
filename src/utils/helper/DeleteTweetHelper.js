import {
    firestore
} from "../../Firebase";

export const deleteTweetHandler = (id) => {
    firestore.doc(`tweets/${id}`).delete();
}