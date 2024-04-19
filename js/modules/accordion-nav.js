// export default function initAccordionNav() {
//   const askings = document.querySelectorAll("[data-accordion-nav] button");
//   const responses = document.querySelectorAll("[data-accordion-nav] dd");
//   if (askings.length && responses.length) {
//     responses[0].classList.add("active");
//     askings.forEach((asks) => {
//       asks.addEventListener("click", handleClick);
//       function handleClick(event) {
//         const controls = event.target.getAttribute("aria-controls");
//         const response = document.getElementById(controls);
//         response.classList.toggle("active");
//         const active = response.classList.contains("active");
//         asks.setAttribute("aria-expanded", active);
//       }
//     });
//   }
// }



























export default class AccordionNav {
  constructor(askings, responses, event) {
    this.askings = document.querySelectorAll(askings);
    this.responses = document.querySelectorAll(responses);
    if (event === undefined) this.event = "click";
    else this.event = event
    this.active = "active";
  }
  init() {
    if (this.askings.length && this.responses.length) {
      this.responses[0].classList.add(this.active);
      this.askings.forEach((ask) => {
        ask.addEventListener(this.event, this.handleClick.bind(this));
      });
    }
    return this;
  }
  handleClick(event) {
    const controls = event.target.getAttribute("aria-controls");
    const response = document.getElementById(controls);
    response.classList.toggle(this.active);
    const active = response.classList.contains(this.active);
    event.target.setAttribute("aria-expanded", active);
  }
}
