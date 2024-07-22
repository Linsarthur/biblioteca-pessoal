import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBgaUDxbBwqmE9wxTtoIf8T7M4eHWD7fRo",
//   authDomain: "semanal-crud.firebaseapp.com",
//   projectId: "semanal-crud",
//   storageBucket: "semanal-crud.appspot.com",
//   messagingSenderId: "448213218946",
//   appId: "1:448213218946:web:2c9e1b99bc8eec7096269b"
// };

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
