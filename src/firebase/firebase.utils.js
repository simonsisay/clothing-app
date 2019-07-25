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

export const createUserProfileDocument = async (userAuth, otherData) => {
  // ref is the reference to the data we want;
  if (!userAuth) return;
  const userRef = await firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...otherData
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
