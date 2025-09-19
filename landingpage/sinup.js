

//      == FIREBASE IMPORTS ========
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

// ======= FIREBASE CONFIG =======
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

// ====== FORM VALIDATION + SIGNUP =========
let register = document.getElementById("register");

register.addEventListener("click", function (e) {
  e.preventDefault(); // form submit hone se roka

  // input values
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // error elements
  const firstNameError = document.getElementById("firstNameError");
  const lastNameError = document.getElementById("lastNameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");

  // clear previous errors
  firstNameError.textContent = "";
  lastNameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";

  let isValid = true;

  // ======== FIRST NAME VALIDATION =======
  const nameRegex = /^[A-Za-z]{2,}$/;
  if (firstName === "") {
    firstNameError.textContent = "First name is required.";
    isValid = false;
  } else if (!nameRegex.test(firstName)) {
    firstNameError.textContent = "First name must be at least 2 letters (A–Z only).";
    isValid = false;
  }

  // ======= LAST NAME VALIDATION ========
  if (lastName === "") {
    lastNameError.textContent = "Last name is required.";
    isValid = false;
  } else if (!nameRegex.test(lastName)) {
    lastNameError.textContent = "Last name must be at least 2 letters (A–Z only).";
    isValid = false;
  }

  // ======== EMAIL VALIDATION ========
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "Enter a valid email address.";
    isValid = false;
  }

  // ====== PASSWORD VALIDATION =======
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

  // ====== CONFIRM PASSWORD VALIDATION ========
  if (confirmPassword === "") {
    confirmPasswordError.textContent = "Confirm password is required.";
    isValid = false;
  } else if (confirmPassword !== password) {
    confirmPasswordError.textContent = "Passwords do not match.";
    isValid = false;
  }

  // ================= FIREBASE SIGNUP =================
  if (isValid) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("User registered successfully ✅");
        console.log("User Info:", user);
      })
      .catch((error) => {
        alert("Error: " + error.message);
        console.error(error.code, error.message);
      });
  }
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".listitem");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
