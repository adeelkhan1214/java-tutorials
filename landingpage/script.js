



// ============hamberger =================
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".listitem");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});


// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
// import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

// // Firebase config
// const firebaseConfig = {
//   apiKey: "AIzaSyC5eF-crVp3FgpBxoxiko0eF30kFMtQx-o",
//   authDomain: "landingpage-23c95.firebaseapp.com",
//   databaseURL: "https://landingpage-23c95-default-rtdb.firebaseio.com",
//   projectId: "landingpage-23c95",
//   storageBucket: "landingpage-23c95.appspot.com",
//   messagingSenderId: "267651960989",
//   appId: "1:267651960989:web:99e9f894b0c416ee3fc474",
//   measurementId: "G-W2QQEFPNBP"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);

// // DOM elements
// const openBtn = document.getElementById("openChat");
// const closeBtn = document.getElementById("closeChat");
// const chatCard = document.getElementById("chatCard");
// const chatMessages = document.querySelector(".chat-messages");
// const input = document.getElementById("messageInput");
// const sendBtn = document.getElementById("sendBtn");

// // 🚨 NEW: Admin input & button
// const adminInput = document.getElementById("adminInput");
// const adminSendBtn = document.getElementById("adminSendBtn");

// // Open/close
// openBtn.addEventListener("clM,N ick", () => chatCard.style.display = "flex");
// closeBtn.addEventListener("click", () => chatCard.style.display = "none");

// const userEmail = "user1@gmail.com";

// // Push message to DB
// function sendMessage(senderType, text) {
//   if (!text) return;

//   const messagesRef = ref(db, "messages");
//   push(messagesRef, {
//     sender: senderType, // "user" or "admin"
//     text,
//      email: userEmail, 
//     timestamp: Date.now()
//   }).catch(err => console.error("Firebase push error:", err));
// }

// // User send
// sendBtn.addEventListener("click", () => {
//   sendMessage("user", input.value.trim());
//   input.value = "";
// });
// input.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     sendMessage("user", input.value.trim());
//     input.value = "";
//   }
// });

// // Admin send
// adminSendBtn.addEventListener("click", () => {
//   sendMessage("admin", adminInput.value.trim());
//   adminInput.value = "";
// });
// adminInput.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     sendMessage("admin", adminInput.value.trim());
//     adminInput.value = "";
//   }
// });

// // Real-time listener for messages
// const messagesRef = ref(db, "messages");
// onChildAdded(messagesRef, (snapshot) => {
//   const msg = snapshot.val();
//   const p = document.createElement("p");

//   if (msg.sender === "user") {
//     p.innerHTML = `<strong>User:</strong> ${msg.text}`;
//     p.style.color = "orange";
//   } else {
//     p.innerHTML = `<strong>Admin:</strong> ${msg.text}`;
//     p.style.color = "green";
//   }

//   p.style.margin = "10px";
//   p.style.fontSize = "16px";
//   chatMessages.appendChild(p);

//   // Auto-scroll
//   chatMessages.scrollTop = chatMessages.scrollHeight;
// });
