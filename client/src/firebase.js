
import  firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyAOOV3-YTMNl67o9D7xRlMZ2jc26jsvZMQ",
  authDomain: "storebay-4809a.firebaseapp.com",
  projectId: "storebay-4809a",
  storageBucket: "storebay-4809a.appspot.com",
  messagingSenderId: "1029629029863",
  appId: "1:1029629029863:web:4aa6e33ffea0b2aa41e142",
  };
  // initialize firebase app
  
    firebase.initializeApp(config);
  
  // export
  // export default firebase;
  export const auth = firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();