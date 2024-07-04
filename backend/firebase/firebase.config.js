import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkBcigjOUrWdcewGNCAnWP9siIMhsWQAI",
  authDomain: "manivas-coorp.firebaseapp.com",
  projectId: "manivas-coorp",
  storageBucket: "manivas-coorp.appspot.com",
  messagingSenderId: "103665960376",
  appId: "1:103665960376:web:f7e5d112c71f424241fb4d",
  measurementId: "G-F6TE5ZRX62"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
