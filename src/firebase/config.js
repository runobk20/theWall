import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCXq3Z0J2qem0Xr9xFmxrgEFq_6HTr5A64",
  authDomain: "thewall-b3c8f.firebaseapp.com",
  projectId: "thewall-b3c8f",
  storageBucket: "thewall-b3c8f.appspot.com",
  messagingSenderId: "334810726392",
  appId: "1:334810726392:web:a0844f9f120f82f8e6e00d"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);