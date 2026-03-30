// Created by Palash Jana - 2025
// Neon-themed interactive portfolio script
const cursorGlow = document.querySelector(".cursor-glow");
const progressBar = document.getElementById("progressBar");
const statNumbers = document.querySelectorAll(".stat-number");
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const certificateCards = document.querySelectorAll(".certificate-card");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxType = document.getElementById("lightboxType");
const lightboxClose = document.getElementById("lightboxClose");
const avatarViewer = document.querySelector(".avatar-viewer");
const avatarFallback = document.getElementById("avatarFallback");

document.addEventListener("mousemove", (event) => {
  if (!cursorGlow) return;
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  progressBar.style.width = `${progress}%`;
});

const animateCounter = (entry) => {
  if (!entry.isIntersecting) return;

  const element = entry.target;
  const target = Number(element.dataset.target || 0);
  let current = 0;
  const increment = Math.max(1, Math.ceil(target / 40));

  const timer = window.setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      window.clearInterval(timer);
    }
    element.textContent = current;
  }, 35);

  counterObserver.unobserve(element);
};

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(animateCounter);
}, { threshold: 0.6 });

statNumbers.forEach((number) => counterObserver.observe(number));

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hidden", !shouldShow);
    });
  });
});

certificateCards.forEach((card) => {
  card.addEventListener("click", () => {
    lightboxImage.src = card.dataset.image || "";
    lightboxTitle.textContent = card.dataset.title || "Certificate";
    lightboxType.textContent = card.dataset.type || "Preview";
    lightbox.showModal();
  });
});

lightboxClose.addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", (event) => {
  const bounds = lightbox.querySelector(".lightbox-content").getBoundingClientRect();
  const clickedInside =
    event.clientX >= bounds.left &&
    event.clientX <= bounds.right &&
    event.clientY >= bounds.top &&
    event.clientY <= bounds.bottom;

  if (!clickedInside) {
    lightbox.close();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.open) {
    lightbox.close();
  }
});

const handleAvatarState = () => {
  if (!avatarViewer || !avatarFallback) return;

  avatarViewer.addEventListener("load", () => {
    avatarFallback.style.display = "none";
  });

  avatarViewer.addEventListener("error", () => {
    avatarFallback.style.display = "grid";
  });
};

handleAvatarState();
