
import { initializeApp } from "firebase/app";
import {getFirestore,collection} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyCkVLzWRQfIdujbkDiUN7kMrx5wU72XXmw",
  authDomain: "filmyverse-project.firebaseapp.com",
  projectId: "filmyverse-project",
  storageBucket: "filmyverse-project.appspot.com",
  messagingSenderId: "332465614213",
  appId: "1:332465614213:web:87831ecbafd6c5ecfd68ec",
  measurementId: "G-FM6NEP3QZB"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const moviesRef = collection(db, "Movies");
export const reviewsRef=collection(db,"Reviews");     
export default app;

