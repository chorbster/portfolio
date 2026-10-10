document.getElementById("year").textContent = new Date().getFullYear();
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.08 },
);
document
  .querySelectorAll(".section, .project")
  .forEach((el) => observer.observe(el));
