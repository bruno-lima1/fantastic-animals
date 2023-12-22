export default function initSmoothScroll() {
  const internalLinks = document.querySelectorAll(
    "[data-smooth-scroll] a[href^='#']"
  );
  if (internalLinks.length) {
    internalLinks.forEach((link) => {
      link.addEventListener("click", handleClick);
      function handleClick(event) {
        event.preventDefault();
        const href = link.getAttribute("href");
        const section = document.querySelector(href);
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }
}
