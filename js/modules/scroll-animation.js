// export default function initScrollAnimation() {
//   const sections = document.querySelectorAll("[data-scroll-animation]");
//   if (sections.length) {
//     const screenHalf = window.innerHeight * 0.6;
//     sections.forEach((section) => {
//       window.addEventListener("scroll", showSections);
//       function showSections() {
//         const sectionIsVisible = section.getBoundingClientRect().top - screenHalf < 0;
//         section.classList.toggle("active", sectionIsVisible);
//       }
//     });
//   }
// }































import debounce from "./debounce.js";

export default class scrollAnimation {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.active = "active";
    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
    this.screenHalf = window.innerHeight * 0.6;
  }
  init() {
    if (this.sections.length) {
      this.addEvent();
      this.getDistance();
      this.checkDistance();
    }
    return this;
  }
  addEvent() {
    window.addEventListener("scroll", this.checkDistance);
  }
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: offset - this.screenHalf,
      };
    });
  }
  checkDistance() {
    this.distance.forEach((item) => {
      console.log(item);
      return window.scrollY > item.offset
        ? item.element.classList.add(this.active)
        : item.element.classList.remove(this.active);
    });
  }
  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
