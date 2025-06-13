let isVisible = false;
function myMessage() {
  const msgDiv = document.getElementById("message");

  if (isVisible) {
    msgDiv.innerHTML = "";
  } else if (!isVisible) {
    msgDiv.innerHTML = "🎉 Happy Birthday! Wish you 1000 years 😊";
  }
  isVisible = !isVisible;
}

// Create confetti
function createConfetti() {
  const container = document.getElementById("confetti-container");
  const colors = ["#FF4D4D", "#FF7676", "#FFD700", "#FFFFFF", "#C0C0C0"];

  // Clear existing confetti
  container.innerHTML = "";

  // Create new confetti
  for (let i = 0; i < 150; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.width = Math.random() * 12 + 3 + "px";
    confetti.style.height = Math.random() * 12 + 3 + "px";
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
    confetti.style.animationDelay = Math.random() * 2 + "s";
    container.appendChild(confetti);
  }
}

// Initial confetti
window.addEventListener("load", createConfetti);

// Button click event
document.getElementById("surpriseBtn").addEventListener("click", function () {
  createConfetti();

  // Add temporary animation to button
  this.style.transform = "scale(1.1)";
  setTimeout(() => {
    this.style.transform = "scale(1)";
  }, 300);
});

// Add floating elements periodically
setInterval(() => {
  const floatingElements = document.querySelectorAll(".floating-element");
  floatingElements.forEach((el) => {
    el.style.animationDelay = `${Math.random() * 4}s`;
  });
}, 8000);
