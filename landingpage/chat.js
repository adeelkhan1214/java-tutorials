 
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, push, onChildAdded, onValue } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

// Firebase Config
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

// DOM Elements
const leftDiv = document.querySelector(".left");
const rightDiv = document.querySelector(".right");
const inputField = document.querySelector(".adminfield");
const sendBtn = document.querySelector(".fa-paper-plane");

let currentUserEmail = null; 

// ---------------- USER LIST LOAD ----------------

const messagesRef = ref(db, "messages");

onValue(messagesRef, (snapshot) => {
  const data = snapshot.val();
  leftDiv.innerHTML = ""; 
  const users = {};

  for (let key in data) {
    const msg = data[key];
    if (msg.email) {

      //  Collect email + firstName

      users[msg.email] = msg.firstName || msg.email.split("@")[0].replace(/[0-9]/g, "");
    }
  }

  // User list banani
  Object.keys(users).forEach(email => {
    const userDiv = document.createElement("div");
    userDiv.classList.add("user");

    // Show firstName instead of email

    userDiv.textContent = users[email];  

    userDiv.addEventListener("click", () => {
      currentUserEmail = email;
      loadMessagesForUser(email);
    });
    leftDiv.appendChild(userDiv);
  });
});

// ---------------- LOAD USER MESSAGES ----------------
function loadMessagesForUser(email) {
  rightDiv.innerHTML = ""; 

  onValue(messagesRef, (snapshot) => {
    rightDiv.innerHTML = ""; 
    const data = snapshot.val();

    for (let key in data) {
      const msg = data[key];
      if (msg.email === email) {
        const msgDiv = document.createElement("div");
        msgDiv.classList.add("message");

        if (msg.sender === "user") {
          msgDiv.style.textAlign = "left";
          msgDiv.style.color = "orange";
          // ⭐ Show firstname
          msgDiv.textContent = `${msg.firstName || msg.email.split("@")[0].replace(/[0-9]/g, "")}: ${msg.text}`;
        } else if (msg.sender === "admin") {
          msgDiv.style.textAlign = "right";
          msgDiv.style.color = "green";
          msgDiv.textContent = `${msg.text}`;
        }

        rightDiv.appendChild(msgDiv);
      }
    }

    // Auto scroll to latest
    rightDiv.scrollTop = rightDiv.scrollHeight;
  });
}

// ---------------- ADMIN SEND MESSAGE ----------------
sendBtn.addEventListener("click", () => {
  if (!currentUserEmail) {
    alert("⚠️ Please select a user first!");
    return;
  }

  const text = inputField.value.trim();
  if (!text) return;

  push(messagesRef, {
    sender: "admin",
    email: currentUserEmail,
    text,
    timestamp: Date.now()
  });

  inputField.value = "";
});
