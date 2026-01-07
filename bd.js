document.addEventListener("DOMContentLoaded", () => {
  music.play().catch(() => {
    console.log("Autoplay blocked. Click anywhere to start music.");
  });
  spawnBalloons();
  spawnConfetti();
});
// Spawn balloons
function spawnBalloons() {
  const colors = ["pink", "purple", "orange", "blue", "green", "red"];
  for (let i = 0; i < 10; i++) {
    const balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.left = Math.random() * 100 + "%";
    balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
    balloon.style.animationDuration = 8 + Math.random() * 6 + "s";
    document.body.appendChild(balloon);
  }
}

// Spawn confetti continuously
function spawnConfetti() {
  const colors = ["#ff72b6","#ffd166","#7bdff2","#caa8f5","#f7aef8","#ffa69e","#84dcc6"];
  setInterval(() => {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = 3 + Math.random() * 3 + "s";
    document.body.appendChild(confetti);
    // remove after falling
    setTimeout(() => confetti.remove(), 6000);
  }, 200);
}