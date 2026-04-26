const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');
const reveals = document.querySelectorAll('.reveal');
const cards = document.querySelectorAll('.project-card');
const yearNode = document.getElementById('year');
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

if (yearNode) yearNode.textContent = new Date().getFullYear();

navToggle?.addEventListener('click', () => {
  nav?.classList.toggle('open');
});

document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', () => nav?.classList.remove('open'));
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  },
  { threshold: 0.2 }
);

reveals.forEach((item) => observer.observe(item));

cards.forEach((card) => {
  card.addEventListener('mousemove', (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rx = ((y - rect.height / 2) / rect.height) * -10;
    const ry = ((x - rect.width / 2) / rect.width) * 10;
    card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(800px) rotateX(0) rotateY(0)';
  });
});

const particles = Array.from({ length: 75 }, () => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
  r: Math.random() * 2 + 0.4,
  dx: (Math.random() - 0.5) * 0.4,
  dy: (Math.random() - 0.5) * 0.4
}));

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p) => {
    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(120, 224, 255, 0.7)';
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

resizeCanvas();
animate();
window.addEventListener('resize', resizeCanvas);
