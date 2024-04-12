export default class SmoothScroll {
  constructor(links, options) {
    this.links = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: "smooth", block: "start" };
    } else {
      this.options = options;
    }
    this.eventActiveScroll = this.eventActiveScroll.bind(this);
  }
  activeScroll(event) {
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }
  eventActiveScroll(event) {
    event.preventDefault();
    this.activeScroll(event);
  }
  addEvent() {
    this.links.forEach((link) => {
      link.addEventListener("click", this.eventActiveScroll);
    });
  }
  init() {
    if (this.links.length) {
      this.addEvent();
    }
    return this;
  }
}
