export default function initScrollAnimation() {
  const sections = document.querySelectorAll("[data-scroll-animation]");
  if (sections.length) {
    const screenHalf = window.innerHeight * 0.6;
    sections.forEach((section) => {
      window.addEventListener("scroll", showSections);
      function showSections() {
        const sectionIsVisible =
          section.getBoundingClientRect().top - screenHalf < 0;
        section.classList.toggle("active", sectionIsVisible);
      }
    });
  }
}
