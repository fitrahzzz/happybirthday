const messages = [
  "SELAMAT ULANG TAHUN SAYANGNYA AKU CINTANYA AKU MANISNYA AKU GEMESNYA AKUUUUUU",
  "Di usia yang ke-23 ini, semoga semua impianmu tercapai dan selalu dikelilingi Hal kebaikan dan kebahagiaan.",
  "Tetap Semangat dalam menjalani hari yaa sayang, Cantiknya aku orangnya kuat ko hebat juga lagi pokonyaa the best bangetttttt!!",
  "Selamat ulang tahun, cintaku. Semoga kita selalu sama-sama yaa sayangg, I Love you More! 💕💕💕"
];

function showMessage(index) {
  const modal = document.getElementById('messageModal');
  const modalMsg = document.getElementById('modalMessage');
  modalMsg.textContent = messages[index - 1];
  modal.style.display = 'block';
}

function closeModal() {
  document.getElementById('messageModal').style.display = 'none';
}

// Tutup modal jika klik di luar kontennya
window.onclick = function(event) {
  const modal = document.getElementById('messageModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};


function playMusic() {
  document.getElementById('bgMusic').play();
}

// Animasi hati
const canvas = document.getElementById('hearts');
const ctx = canvas.getContext('2d');
let hearts = [];
resizeCanvas();

window.addEventListener('resize', resizeCanvas);

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createHeart() {
  const x = Math.random() * canvas.width;
  const y = canvas.height + 20;
  const size = Math.random() * 20 + 10;
  const speed = Math.random() * 1 + 0.5;
  hearts.push({ x, y, size, speed });
}

function drawHeart(x, y, size) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(x + size / 2, y - size, x + size * 2, y + size / 2, x, y + size);
  ctx.bezierCurveTo(x - size * 2, y + size / 2, x - size / 2, y - size, x, y);
  ctx.fillStyle = 'rgba(255, 105, 180, 0.7)';
  ctx.fill();
}

function animateHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < hearts.length; i++) {
    const heart = hearts[i];
    drawHeart(heart.x, heart.y, heart.size);
    heart.y -= heart.speed;
    if (heart.y < -20) hearts.splice(i, 1);
  }
  if (Math.random() < 0.1) createHeart();
  requestAnimationFrame(animateHearts);
}

animateHearts();
