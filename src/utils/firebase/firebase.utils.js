import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkqBt60B3bKdnD547SCUMYsKxJVXHIB1s",
  authDomain: "crwn-clothing-62120-db.firebaseapp.com",
  projectId: "crwn-clothing-62120-db",
  storageBucket: "crwn-clothing-62120-db.appspot.com",
  messagingSenderId: "237269812463",
  appId: "1:237269812463:web:6b1deed74ad9344815c71a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
