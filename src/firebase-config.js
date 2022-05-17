// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCoRByneWmV9eII4E51yTPb0AaAOF6Zlg",
  authDomain: "studybear-79c4e.firebaseapp.com",
  projectId: "studybear-79c4e",
  storageBucket: "studybear-79c4e.appspot.com",
  messagingSenderId: "911830907608",
  appId: "1:911830907608:web:528fced1f1aaaf800c35ad",
  measurementId: "G-LHPWXBD0TM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const authentication = getAuth(app);
