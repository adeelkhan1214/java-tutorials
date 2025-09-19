  // import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  //   import { getDatabase, ref, push, onChildAdded, set } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

  //   const firebaseConfig = {
  //     apiKey: "AIzaSyC5eF-crVp3FgpBxoxiko0eF30kFMtQx-o",
  //     authDomain: "landingpage-23c95.firebaseapp.com",
  //     databaseURL: "https://landingpage-23c95-default-rtdb.firebaseio.com",
  //     projectId: "landingpage-23c95",
  //     storageBucket: "landingpage-23c95.firebasestorage.app",
  //     messagingSenderId: "267651960989",
  //     appId: "1:267651960989:web:99e9f894b0c416ee3fc474",
  //     measurementId: "G-W2QQEFPNBP"
  //   };

  //   // Initialize Firebase
  //   const app = initializeApp(firebaseConfig);
  //   const db = getDatabase(app);

  //   // DOM
  //   const usersList = document.querySelector(".left");
  //   const messagesDiv = document.querySelector(".right");
  //   const inputField = document.querySelector(".adminfield");
  //   const sendBtn = document.querySelector(".fa-paper-plane");

  //   let selectedUser = null;

  //   function safeEmail(email) {
  //     return email.replace(/\./g, "_").replace(/@/g, "_");
  //   }

  //   // Load users
  //   function loadUsers() {
  //     const usersRef = ref(db, "users");
  //     onChildAdded(usersRef, (snapshot) => {
  //       const userData = snapshot.val();
  //       if (!userData?.email) return;

  //       const userEmail = userData.email;
  //       const firstName = userEmail.split("@")[0];

  //       const userDiv = document.createElement("div");
  //       userDiv.className = "user";
  //       userDiv.textContent = firstName;

  //       userDiv.addEventListener("click", () => {
  //         selectedUser = userEmail;
  //         messagesDiv.innerHTML = `<h3>Chat with ${firstName}</h3>`;
  //         loadMessages(userEmail);
  //       });

  //       usersList.appendChild(userDiv);
  //     });
  //   }

  //   // Load messages
  //   function loadMessages(userEmail) {
  //     const safeKey = safeEmail(userEmail);
  //     const chatRef = ref(db, `messages/${safeKey}`);
  //     messagesDiv.innerHTML = "";

  //     onChildAdded(chatRef, (snapshot) => {
  //       const msg = snapshot.val();
  //       if (!msg) return;

  //       const msgDiv = document.createElement("div");
  //       msgDiv.textContent = `${msg.sender}: ${msg.text}`;
  //       messagesDiv.appendChild(msgDiv);
  //     });
  //   }

  //   // Send message
  //   function sendMessage() {
  //     if (!selectedUser) {
  //       alert("Select a user first!");
  //       return;
  //     }

  //     const message = inputField.value.trim();
  //     if (!message) return;

  //     const safeKey = safeEmail(selectedUser);
  //     const chatRef = ref(db, `messages/${safeKey}`);
  //     const newMsgRef = push(chatRef);

  //     set(newMsgRef, {
  //       sender: "Admin",
  //       text: message,
  //       timestamp: Date.now()
  //     });

  //     inputField.value = "";
  //   }

  //   sendBtn.addEventListener("click", sendMessage);
  //   inputField.addEventListener("keypress", (e) => {
  //     if (e.key === "Enter") sendMessage();
  //   });

  //   loadUsers();



  // =================== chat.js =================

// Firebase Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, push, onChildAdded, onValue } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

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
  leftDiv.innerHTML = ""; // clear old list
  const users = {};

  for (let key in data) {
    const msg = data[key];
    if (msg.email) {
      users[msg.email] = true;
    }
  }

  // user list banani
  Object.keys(users).forEach(email => {
    const userDiv = document.createElement("div");
    userDiv.classList.add("user");
    userDiv.textContent = email;
    userDiv.addEventListener("click", () => {
      currentUserEmail = email;
      loadMessagesForUser(email);
    });
    leftDiv.appendChild(userDiv);
  });
});

// ---------------- LOAD USER MESSAGES ----------------
function loadMessagesForUser(email) {
  rightDiv.innerHTML = ""; // clear old messages

  onValue(messagesRef, (snapshot) => {
    rightDiv.innerHTML = ""; // reset every time
    const data = snapshot.val();

    for (let key in data) {
      const msg = data[key];
      if (msg.email === email) {
        const msgDiv = document.createElement("div");
        msgDiv.classList.add("message");

        if (msg.sender === "user") {
          msgDiv.style.textAlign = "left";
          msgDiv.style.color = "orange";
          msgDiv.textContent = `${msg.text}`;
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
