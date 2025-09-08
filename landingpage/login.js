import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

// ================== FIREBASE CONFIG ==================
const firebaseConfig = {
  apiKey: "AIzaSyC5eF-crVp3FgpBxoxiko0eF30kFMtQx-o",
  authDomain: "landingpage-23c95.firebaseapp.com",
  projectId: "landingpage-23c95",
  storageBucket: "landingpage-23c95.firebasestorage.app",
  messagingSenderId: "267651960989",
  appId: "1:267651960989:web:99e9f894b0c416ee3fc474",
  measurementId: "G-W2QQEFPNBP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



let login = document.getElementById("login");

login.addEventListener("click", function (e) {
  e.preventDefault(); // form submit hone se roka

  // input values
 
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;


  // error elements

  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
 

  // clear previous errors

  emailError.textContent = "";
  passwordError.textContent = "";

  let isValid = true;

  

  // ================= EMAIL VALIDATION =================
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "Enter a valid email address.";
    isValid = false;
  }

  // ================= PASSWORD VALIDATION =================
  if (password === "") {
    passwordError.textContent = "Password is required.";
    isValid = false;
  } else {
    if (password.length < 8) {
      passwordError.textContent = "Password must be at least 8 characters.";
      isValid = false;
    } else if (password.length > 20) {
      passwordError.textContent = "Password cannot be more than 20 characters.";
      isValid = false;
    } else if (!/[A-Z]/.test(password)) {
      passwordError.textContent = "Password must contain at least one uppercase letter.";
      isValid = false;
    } else if (!/[a-z]/.test(password)) {
      passwordError.textContent = "Password must contain at least one lowercase letter.";
      isValid = false;
    } else if (!/[0-9]/.test(password)) {
      passwordError.textContent = "Password must contain at least one number.";
      isValid = false;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      passwordError.textContent = "Password must contain at least one special character.";
      isValid = false;
    } else if (/\s/.test(password)) {
      passwordError.textContent = "Password cannot contain spaces.";
      isValid = false;
    } else {
      const weakPasswords = ["123456", "password", "qwerty", "abc123"];
      if (weakPasswords.includes(password.toLowerCase())) {
        passwordError.textContent = "Password is too weak. Choose a stronger one.";
        isValid = false;
      }
    }
  }


  // ================= SUCCESS CASE =================
  if (isValid) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("✅ Login successful!");
      console.log("User Info:", user);
      // yahan tum redirect kar sakte ho e.g.
      window.location.href = "home.html";
    })
    .catch((error) => {
      console.error("❌ Login error:", error.message);
      alert("❌ " + error.message);
    });
}
});


const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".listitem");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
