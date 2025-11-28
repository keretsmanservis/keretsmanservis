const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuIcon.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuIcon.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const heroContent = document.querySelector(".hero-content");
  setTimeout(() => {
    heroContent.classList.add("show");
  }, 300);
});

const cards = document.querySelectorAll(".service-card");

function updateCards() {
  cards.forEach((card, index) => {
    const rect = card.parentElement.getBoundingClientRect();
    const trigger = window.innerHeight * 0.45;

    if (rect.top <= trigger) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", updateCards);
updateCards();

window.addEventListener("scroll", () => {
  const bg = document.querySelector(".section-letter-bg");
  const value = window.scrollY * 0.05;
  bg.style.transform = `translate(-50%, calc(-50% + ${value}px))`;
});

const aboutContent = document.querySelector(".about-content");

function showAbout() {
  if (!aboutContent) return;
  const rect = aboutContent.getBoundingClientRect();
  const trigger = window.innerHeight * 0.9;

  if (rect.top <= trigger) {
    aboutContent.classList.add("show");
  }
}

document.addEventListener("DOMContentLoaded", showAbout);

window.addEventListener("scroll", showAbout);

document.addEventListener("DOMContentLoaded", () => {
  const accordionItems = document.querySelectorAll(".accordion-item");

  if (accordionItems.length > 0) {
    const firstItem = accordionItems[0];
    const firstContent = firstItem.querySelector(".accordion-content");

    firstItem.classList.add("active");
    firstContent.style.maxHeight = firstContent.scrollHeight + "px";
    firstItem.querySelector(".arrow").textContent = "−";
  }

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");

    header.setAttribute("tabindex", "-1");
    header.addEventListener("mousedown", (e) => e.preventDefault());

    header.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      accordionItems.forEach((i) => {
        i.classList.remove("active");
        i.querySelector(".accordion-content").style.maxHeight = null;
        i.querySelector(".arrow").textContent = "+";
      });

      if (!isActive) {
        item.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
        header.querySelector(".arrow").textContent = "−";
      }
    });
  });
});

// Scroll animation for accordion
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".accordion-item");

  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries, observerEl) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observerEl.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  items.forEach((item) => observer.observe(item));
});

function scrollToAbout() {
  document.querySelector("#about").scrollIntoView({
    behavior: "smooth",
  });
}

document.getElementById("orderForm").addEventListener("submit", function () {
  const btn = document.querySelector(".service-btn");
  btn.textContent = "✓ Odoslané!";
  btn.style.background = "#3ba76b";
});
