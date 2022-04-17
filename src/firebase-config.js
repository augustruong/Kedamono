import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeVdGEjOL0HayAcjS-GTPU7HFTHnEzO5A",
  authDomain: "kedamono-fc47a.firebaseapp.com",
  projectId: "kedamono-fc47a",
  storageBucket: "kedamono-fc47a.appspot.com",
  messagingSenderId: "125728533513",
  appId: "1:125728533513:web:54ca93ce4035f527b8dcd8",
  measurementId: "G-BD1L3M5XGL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();