export default function initAccordionNav() {
  const askings = document.querySelectorAll("[data-accordion-nav] button");
  const responses = document.querySelectorAll("[data-accordion-nav] dd");
  if (askings.length) {
    responses[0].classList.add("active");
    askings.forEach((asks) => {
      asks.addEventListener("click", handleClick);
      function handleClick() {
        const controls = asks.getAttribute("aria-controls");
        const response = document.getElementById(controls);
        response.classList.toggle("active");
        const active = response.classList.contains("active");
        asks.setAttribute("aria-expanded", active)
      }
    });
  }
}
