// Cuenta regresiva
const eventDate = new Date("2026-04-20T17:00:00").getTime();
const timer = document.getElementById("timer");

setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Música on/off
const music = document.getElementById("music");
const btn = document.getElementById("musicBtn");
let playing = false;

btn.addEventListener("click", () => {
  if (!playing) {
    music.play();
    btn.textContent = "🔇 Música: ON";
  } else {
    music.pause();
    btn.textContent = "🔊 Música: OFF";
  }
  playing = !playing;
});
