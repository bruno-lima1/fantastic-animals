export default function initSmoothScroll() {
  const links = document.querySelectorAll("[data-smooth-scroll] a[href^='#']");
  if (links.length) {
    links.forEach((link) => {
      link.addEventListener("click", handleClick);
      function handleClick(event) {
        event.preventDefault();
        const href = event.target.getAttribute("href");
        const section = document.querySelector(href);
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }
}
