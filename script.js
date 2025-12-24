document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     TOGGLE SWITCH (Theme demo)
  ========================== */
  const toggle = document.querySelector(".switch input");

  if (toggle) {
    toggle.addEventListener("change", () => {
      if (toggle.checked) {
        document.documentElement.style.setProperty("--bg", "#000");
        document.documentElement.style.setProperty("--white", "#fff");
      } else {
        document.documentElement.style.setProperty("--bg", "#6d6d6d");
        document.documentElement.style.setProperty("--white", "#ffffff");
      }
    });
  }

  /* =========================
     SCROLL DOWN BUTTON
  ========================== */
  const scrollDown = document.querySelector(".scroll-down");

  if (scrollDown) {
    scrollDown.addEventListener("click", () => {
      const nextSection = document.querySelector(".solutions");
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  /* =========================
     SLIDE INDEX (LEFT SIDEBAR)
  ========================== */
  const slideIndex = document.querySelector(".slideIndex");
  const sections = document.querySelectorAll(
    ".hero, .solutions, .projects1, .servicesContainerMain, .latestthoughts, .yellowContainer"
  );

  function updateSlideIndex() {
    let current = 1;

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2) {
        current = index + 1;
      }
    });

    if (slideIndex) {
      slideIndex.textContent = String(current).padStart(2, "0");
    }
  }

  window.addEventListener("scroll", updateSlideIndex);
  updateSlideIndex();

  /* =========================
     VIDEO CARD (Play toggle UI)
  ========================== */
  const playBtn = document.querySelector(".playBtn");

  if (playBtn) {
    let playing = false;

    playBtn.addEventListener("click", () => {
      playing = !playing;
      playBtn.innerHTML = playing ? "❚❚" : "▶";
    });
  }

  /* =========================
     PROJECT CARDS HOVER
  ========================== */
  const projectCards = document.querySelectorAll(".cardTop");

  projectCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.02)";
      card.style.transition = "0.3s ease";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
    });
  });

  /* =========================
     SERVICES LIST HOVER ACTIVE
  ========================== */
  const serviceItems = document.querySelectorAll(".serviceList li");

  serviceItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
      serviceItems.forEach(i => i.classList.remove("active"));
      item.style.color = "var(--accent)";
      item.style.borderBottom = "1px solid var(--accent)";
    });

    item.addEventListener("mouseleave", () => {
      item.style.color = "";
      item.style.borderBottom = "";
    });
  });

  /* =========================
     CTA BUTTONS
  ========================== */
  const ctaButtons = document.querySelectorAll(
    ".cta, .ctaCircle, .whiteCircle, .readMore, .moreWorks, .moreStories"
  );

  ctaButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      console.log("CTA clicked:", btn.textContent.trim());
    });
  });

  /* =========================
     SMOOTH ANCHOR SCROLL
  ========================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});