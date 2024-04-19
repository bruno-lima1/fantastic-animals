export default class AccordionNav {
  constructor(askings, responses, event) {
    this.askings = document.querySelectorAll(askings);
    this.responses = document.querySelectorAll(responses);
    this.active = "active"
    if (event === undefined) this.event = "click";
    else this.event = event
    this.toggleAccordion = this.toggleAccordion.bind(this)
  }
  init() {
    if (this.askings.length && this.responses.length) {
      this.responses[0].classList.add(this.active);
      this.addEvent()
    }
    return this;
  }
  addEvent() {
    this.askings.forEach((asks) => {
      asks.addEventListener(this.event, this.toggleAccordion);
    });
  }
  toggleAccordion(event) {
    const controls = event.target.getAttribute("aria-controls");
    const response = document.getElementById(controls);
    response.classList.toggle(this.active);
    const active = response.classList.contains(this.active);
    event.currentTarget.setAttribute("aria-expanded", active);
  }
}
