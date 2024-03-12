import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmxQ8QxnUlvorExKM8ZWs9X1rdHIctSlY",
  authDomain: "audiophile-b7e5c.firebaseapp.com",
  projectId: "audiophile-b7e5c",
  storageBucket: "audiophile-b7e5c.appspot.com",
  messagingSenderId: "815213882882",
  appId: "1:815213882882:web:4c227b7be891f16bc9011b",
  measurementId: "G-M5WW2RJ8FN",
};

const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);
export { app, firebaseAuth };
