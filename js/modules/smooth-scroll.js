export default class SmoothScroll {
  constructor(links, options, event) {
    this.links = document.querySelectorAll(links);
    if (options === undefined)
      this.options = { behavior: "smooth", block: "start" };
    else this.options = options;
    if (event === undefined) this.event = "click";
    else this.event = event;
    this.eventActiveScroll = this.eventActiveScroll.bind(this);
  }
  init() {
    if (this.links.length) {
      this.addEvent();
    }
    return this;
  }
  addEvent() {
    this.links.forEach((link) => {
      link.addEventListener(this.event, this.eventActiveScroll);
    });
  }
  eventActiveScroll(event) {
    event.preventDefault();
    return this.activeScroll(event);
  }
  activeScroll(event) {
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }
}
