import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyA1LvUoF5JBlSWkAaNywXGrvZhgEmAvoRo",
  authDomain: "clothing-app-19cd6.firebaseapp.com",
  databaseURL: "https://clothing-app-19cd6.firebaseio.com",
  projectId: "clothing-app-19cd6",
  storageBucket: "",
  messagingSenderId: "839405533134",
  appId: "1:839405533134:web:631230d8309d8f61"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
