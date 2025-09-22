



// ============hamberger =================
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".listitem");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});


