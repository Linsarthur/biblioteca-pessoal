import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFosruYv8OUzJpyqsFW3YwUmnA6rWmBwk",
  authDomain: "projeto-reserva-21deb.firebaseapp.com",
  projectId: "projeto-reserva-21deb",
  storageBucket: "projeto-reserva-21deb.appspot.com",
  messagingSenderId: "144217242525",
  appId: "1:144217242525:web:4af3ae3de7f5d9212bcd74"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
