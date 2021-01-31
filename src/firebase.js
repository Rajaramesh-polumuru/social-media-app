import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCNjScQBsxf36Xh86qW3aTGV-RjxOf0Igo",
  authDomain: "social-media-app-238e0.firebaseapp.com",
  projectId: "social-media-app-238e0",
  storageBucket: "social-media-app-238e0.appspot.com",
  messagingSenderId: "46891890044",
  appId: "1:46891890044:web:7fd1831b88e75da4a6a0f9",
  measurementId: "G-WEDBGBC9JG",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
