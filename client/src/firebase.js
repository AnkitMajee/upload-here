// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "uploadhere-6ad80.firebaseapp.com",
  projectId: "uploadhere-6ad80",
  storageBucket: "uploadhere-6ad80.appspot.com",
  messagingSenderId: "181458485718",
  appId: "1:181458485718:web:1d952fcc479c2b993e6477",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
