// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpUr6i7sQI25D6x__mVhJ_A5TTEEJXOoc",
  authDomain: "aula-firebase-375db.firebaseapp.com",
  projectId: "aula-firebase-375db",
  storageBucket: "aula-firebase-375db.firebasestorage.app",
  messagingSenderId: "199188959091",
  appId: "1:199188959091:web:fb099080d7684c0525bf06",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
