import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0ZQUijqN7WTn4yr8334IFgG6BrUgQh2M",
  authDomain: "cprg306-assignments-301bf.firebaseapp.com",
  projectId: "cprg306-assignments-301bf",
  storageBucket: "cprg306-assignments-301bf.firebasestorage.app",
  messagingSenderId: "422162619566",
  appId: "1:422162619566:web:af88f52b28c9e66528a13f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
