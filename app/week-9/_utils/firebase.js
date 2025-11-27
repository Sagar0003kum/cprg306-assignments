
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyC0ZQUijqN7WTn4yr8334IFgG6BrUgQh2M",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "cprg306-assignments-301bf.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "cprg306-assignments-301bf",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "cprg306-assignments-301bf.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "422162619566",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:422162619566:web:af88f52b28c9e66528a13f",
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
