
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase, ref, push, onChildAdded, onValue } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

// Firebase Config (same as your sdf file)


const firebaseConfig = {
  apiKey: "AIzaSyC5eF-crVp3FgpBxoxiko0eF30kFMtQx-o",
  authDomain: "landingpage-23c95.firebaseapp.com",
  databaseURL: "https://landingpage-23c95-default-rtdb.firebaseio.com",
  projectId: "landingpage-23c95",
  storageBucket: "landingpage-23c95.firebasestorage.app",
  messagingSenderId: "267651960989",
  appId: "1:267651960989:web:99e9f894b0c416ee3fc474",
  measurementId: "G-W2QQEFPNBP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

const adminLink = document.getElementById("admin-link");
const ALLOWED_EMAIL = "aqeelabbas1849@gmail.com";          

onAuthStateChanged(auth, (user) => {
  if (!user) {
    adminLink.classList.add("hidden");             // login nahi kiya
    return;
  }

  const email = (user.email || "").toLowerCase();
  if (email === ALLOWED_EMAIL.toLowerCase()) {
    adminLink.classList.remove("hidden");     // sirf admin ko dikhayega
  } else {
    adminLink.classList.add("hidden");         // baki sab ko hide
  }
});




