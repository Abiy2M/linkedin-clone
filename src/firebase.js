import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCCOFoa5pjrDGHkMluUXkFp5nk6kaTGFhs",
    authDomain: "linkedin-clone-4a8b9.firebaseapp.com",
    projectId: "linkedin-clone-4a8b9",
    storageBucket: "linkedin-clone-4a8b9.appspot.com",
    messagingSenderId: "970206169308",
    appId: "1:970206169308:web:288f574c260e6a032b8c19"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };