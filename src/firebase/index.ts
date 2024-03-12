import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLIZOkOYpV4URyzNqO4RjV4h5g1jdpedE",
  authDomain: "audiophile-fe1c5.firebaseapp.com",
  projectId: "audiophile-fe1c5",
  storageBucket: "audiophile-fe1c5.appspot.com",
  messagingSenderId: "54621026782",
  appId: "1:54621026782:web:a5398ebb573a8b612cc54f",
};

const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);
export { app, firebaseAuth }
