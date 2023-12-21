export default function initScrollAnimation() {
  const sections = document.querySelectorAll("[data-scroll-animation]");
  if (sections.length) {
    const screenHalf = window.innerHeight * 0.6;
    window.addEventListener("scroll", showSection);
    function showSection() {
      sections.forEach((section) => {
        const sectionIsVisible = section.getBoundingClientRect().top - screenHalf < 0;
        section.classList.toggle("active", sectionIsVisible);
      });
    }
  }
}
