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
