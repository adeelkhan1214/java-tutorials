


// =================== chat js =================



import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC5eF-crVp3FgpBxoxiko0eF30kFMtQx-o",
  authDomain: "landingpage-23c95.firebaseapp.com",
  databaseURL: "https://landingpage-23c95-default-rtdb.firebaseio.com",
  projectId: "landingpage-23c95",
  storageBucket: "landingpage-23c95.appspot.com",
  messagingSenderId: "267651960989",
  appId: "1:267651960989:web:99e9f894b0c416ee3fc474",
  measurementId: "G-W2QQEFPNBP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// DOM elements
const openBtn = document.getElementById("openChat");
const closeBtn = document.getElementById("closeChat");
const chatCard = document.getElementById("chatCard");
const chatMessages = document.querySelector(".chat-messages");
const input = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");


// Open/close
openBtn.addEventListener("click", () => chatCard.style.display = "flex");
closeBtn.addEventListener("click", () => chatCard.style.display = "none");


const userEmail = "user1@gmail.com";

// Push message to DB
function sendMessage( senderType,text) {
  if (!text) return;

  const messagesRef = ref(db, "messages");
  push(messagesRef, {
    sender: senderType, // "user" or "admin"
    text,
     email: userEmail, 
    timestamp: Date.now()
  }).catch(err => console.error("Firebase push error:", err));
}

// User send
sendBtn.addEventListener("click", () => {
  sendMessage("user", input.value.trim());
  input.value = "";
});
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    sendMessage("user", input.value.trim());
    input.value = "";
  }
});



// Real-time listener for messages
const messagesRef = ref(db, "messages");
onChildAdded(messagesRef, (snapshot) => {
  const msg = snapshot.val();
  const p = document.createElement("p");

  if (msg.sender === "user") {
    p.innerHTML = `<strong>User:</strong> ${msg.text}`;
    p.style.color = "orange";
  } else {
    p.innerHTML = `<strong>Admin:</strong> ${msg.text}`;
    p.style.color = "green";
  }

  p.style.margin = "10px";
  p.style.fontSize = "16px";
  chatMessages.appendChild(p);

  // Auto-scroll
  chatMessages.scrollTop = chatMessages.scrollHeight;
});


// ==========intractive ui css  ==============


  // JavaScript for interactive elements (optional)
        document.querySelectorAll('.accordion-header').forEach(button => {
            button.addEventListener('click', () => {
                const content = button.nextElementSibling;
                button.classList.toggle('active');
                if (button.classList.contains('active')) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    content.style.maxHeight = '0';
                }
            });
        });

        document.querySelectorAll('.tab-button').forEach(button => {
            button.addEventListener('click', () => {
                document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
                document.querySelectorAll('.indicator-content').forEach(content => content.classList.remove('active'));
                
                button.classList.add('active');
                document.getElementById(button.dataset.tab).classList.add('active');
            });
        });




        // ========= first portion ============

        // Auto Carousel
let index = 0;
function showSlides() {
  let slides = document.querySelectorAll(".slides");
  slides.forEach(slide => slide.style.display = "none");
  index++;
  if (index > slides.length) index = 1;
  slides[index - 1].style.display = "block";
  setTimeout(showSlides, 3000); // 3 seconds
}
showSlides();

// Fade-in on Scroll
const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fade => {
  appearOnScroll.observe(fade);
});
