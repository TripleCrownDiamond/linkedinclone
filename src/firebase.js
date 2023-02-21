import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBDfcE59MlsAWDmIp-3nYjSuJ_AkVv3zN0",
  authDomain: "linkedin-clone-48fb9.firebaseapp.com",
  projectId: "linkedin-clone-48fb9",
  storageBucket: "linkedin-clone-48fb9.appspot.com",
  messagingSenderId: "317190484799",
  appId: "1:317190484799:web:3fcd2e739e24de10ea598a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
