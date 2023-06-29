import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDbHc_iTyalaypMrxtcHQb-SQw9EZ6tG9g",
  authDomain: "nextfire-4a3db.firebaseapp.com",
  projectId: "nextfire-4a3db",
  storageBucket: "nextfire-4a3db.appspot.com",
  messagingSenderId: "620380355101",
  appId: "1:620380355101:web:05833acde855944d96a4f4"
}

if (!firebase.apps.length)
  firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();