// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCzLAHohZ1d-MpHtDKjW-n6QmlouXffq6I",
  authDomain: "hotel-booking-6b8cb.firebaseapp.com",
  projectId: "hotel-booking-6b8cb",
  storageBucket: "hotel-booking-6b8cb.firebasestorage.app",
  messagingSenderId: "1020067771973",
  appId: "1:1020067771973:web:058818bf18c1baa892552c",
  measurementId: "G-V5C2HXM4ST",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
