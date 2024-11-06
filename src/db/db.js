//credenciales firebase ecommerce react 

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO-VpWqVghp2Jj5DWwLBKs5oK3cqKu5bM",
  authDomain: "ecommerce-react-33560.firebaseapp.com",
  projectId: "ecommerce-react-33560",
  storageBucket: "ecommerce-react-33560.firebasestorage.app",
  messagingSenderId: "812006390942",
  appId: "1:812006390942:web:ffc15d380de5786a7acf8f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db;