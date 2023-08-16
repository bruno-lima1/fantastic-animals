export default function initScrollAnimation() {
  const sections = document.querySelectorAll("[data-scroll-animation]");
  if (sections.length) {
    function showSection() {
      const screenHalf = window.innerHeight * 0.6;
      sections.forEach((section) => {
        const isVisible = section.getBoundingClientRect().top - screenHalf < 0;
        section.classList.toggle("active", isVisible);
      });
    }
    window.addEventListener("scroll", showSection);
  }
}
