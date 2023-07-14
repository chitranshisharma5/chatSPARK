// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC3lIUu_hQZfEZ7W-Q9KiYslo2EmBKbG9w",
  authDomain: "chitranshiapp.firebaseapp.com",
  projectId: "chitranshiapp",
  storageBucket: "chitranshiapp.appspot.com",
  messagingSenderId: "429319345481",
  appId: "1:429319345481:web:8e60a10f8db8c24109f698",
  measurementId: "G-F223H5MHZX",
};
const initializeApp = firebase.initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
