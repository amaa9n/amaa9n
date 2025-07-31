const roles = [
  "Desktop Support Engineer",
  "IT Professional",
  "AI-Based Coder",
  "Tech Innovator"
];

const typingElement = document.querySelector(".typing-text");
let charIndex = 0;
let roleIndex = 0;
let isDeleting = false;

function type() {
  const current = roles[roleIndex];
  typingElement.textContent = current.substring(0, charIndex);
  
  if (!isDeleting && charIndex < current.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, 1000);
  }
}

document.addEventListener("DOMContentLoaded", type);