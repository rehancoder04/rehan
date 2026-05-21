const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

const animatedElements = document.querySelectorAll(
  ".reveal, .fade-up, .fade-left, .fade-right, .zoom-in, .flip-up, .blur-in"
);

const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.15
});

animatedElements.forEach((el) => animationObserver.observe(el));

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hide");
    document.body.classList.add("loaded");
  }, 1800);
});

const typingElement = document.getElementById("typing");
const words = ["Front-End Developer", "WordPress Developer", "Educator"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect(){
  const currentWord = words[wordIndex];

  if(isDeleting){
    typingElement.textContent = currentWord.substring(0, charIndex--);
  }else{
    typingElement.textContent = currentWord.substring(0, charIndex++);
  }

  if(!isDeleting && charIndex === currentWord.length + 1){
    isDeleting = true;
    setTimeout(typeEffect, 1200);
    return;
  }

  if(isDeleting && charIndex === 0){
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? 60 : 100);
}

typeEffect();
const cursorDot = document.querySelector(".cursor-dot");

let mouseX = 0;
let mouseY = 0;

let dotX = 0;
let dotY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  dotX += (mouseX - dotX) * 0.12;
  dotY += (mouseY - dotY) * 0.12;

 cursorDot.style.left = (dotX - 7) + "px";
cursorDot.style.top = (dotY - 7) + "px";

  requestAnimationFrame(animateCursor);
}

animateCursor();

const scrollProgress = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;

  scrollProgress.style.width = `${progress}%`;
});

const topBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if(window.scrollY > 300){
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
const tiltCards = document.querySelectorAll(
  ".skill-box, .project-card, .timeline-item, .contact-item, .edu-card"
);

tiltCards.forEach((card) => {

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / 18);
    const rotateY = ((centerX - x) / 18);

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-8px)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = `
      rotateX(0)
      rotateY(0)
      translateY(0)
    `;
  });

});
