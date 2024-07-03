import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "uploadhere-6ad80.firebaseapp.com",
  projectId: "uploadhere-6ad80",
  storageBucket: "uploadhere-6ad80.appspot.com",
  messagingSenderId: "181458485718",
  appId: "1:181458485718:web:1d952fcc479c2b993e6477"
};

export const app = initializeApp(firebaseConfig);
