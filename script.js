document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");

  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 45, 280)}ms`;
    observer.observe(item);
  });

  // Subtle mouse parallax for the hero logo orbit.
  const orbit = document.querySelector(".hero-orbit");
  if (orbit && window.matchMedia("(pointer:fine)").matches) {
    window.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth - .5) * 10;
      const y = (e.clientY / window.innerHeight - .5) * 10;
      orbit.style.marginLeft = `${x}px`;
      orbit.style.marginTop = `${y}px`;
    });
  }
});
document.addEventListener("contextmenu", function(e) {
    if (e.target.closest("img")) {
        e.preventDefault();
    }
});

document.addEventListener("dragstart", function(e) {
    if (e.target.closest("img")) {
        e.preventDefault();
    }
});