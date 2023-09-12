export default function initSmoothScroll() {
  const internalLinks = document.querySelectorAll(
    "[data-smooth-scroll] a[href^='#']"
  );
  if (internalLinks.length) {
    internalLinks.forEach((links) => {
      ["touchstart", "click"].forEach((userEvent) => {
        links.addEventListener(userEvent, activeSmoothScroll);
      });
    });
    function activeSmoothScroll(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
}
