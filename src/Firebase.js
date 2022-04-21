import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDcTWQ0Fo-tflVgiCMtITa3kBfnaJLK90A",
    authDomain: "devsunitedsp4.firebaseapp.com",
    projectId: "devsunitedsp4",
    storageBucket: "devsunitedsp4.appspot.com",
    messagingSenderId: "168270308549",
    appId: "1:168270308549:web:66c6606ad3d88d209abcac"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// Exporta la funcionalidad de la DB
export const firestore = firebase.firestore();
// exporta el paquete de firebase para poder usarlo

//exporta y crea un modulo de auth.
export const auth = firebase.auth();
auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
//creando un nuevo provider.
export const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

export const serverTimestamp = firebase.firestore.Timestamp.now();

export const loginWithGoogle = () => auth.signInWithPopup(provider);
export const logOut = () => {
    return auth.signOut()
};


export default firebase;