export default function initScrollAnimation() {
  const sections = document.querySelectorAll("[data-scroll-animation]");
  if (sections.length) {
    const screenHalf = window.innerHeight * 0.6;
    sections.forEach((section) => {
      window.addEventListener("scroll", showSections);
      function showSections() {
        const sectionIsVisible = section.getBoundingClientRect().top - screenHalf < 0;
        section.classList.toggle("active", sectionIsVisible);
      }
    });
  }
}






























// import debounce from "./debounce.js";

// export default class scrollAnimation {
//   constructor(sections, active) {
//     this.sections = document.querySelectorAll(sections)
//     this.screenHalf = window.innerHeight * 0.6;
//     this.active = active;
//     this.checkDistance = debounce(this.checkDistance.bind(this), 50)
//   }
//   getDistance() {
//     this.distance = [...this.sections].map((section) => {
//       const offset = section.offsetTop;
//       return {
//         element: section,
//         offset: Math.floor(offset - this.screenHalf),
//       }
//     })
//   }
//   checkDistance() {
//     this.distance.forEach((item) => {
//       if (window.scrollY > item.offset) {
//         item.element.classList.add(this.active)
//       } else if (item.element.classList.contains(this.active)) {
//         item.element.classList.remove(this.active)
//       }
//     })
//   }
//   addEvent() {
//     window.addEventListener("scroll", this.checkDistance);
//   }
//   init() {
//     if (this.sections.length) {
//       this.addEvent()
//       this.getDistance()
//       this.checkDistance()
//     }
//     return this;
//   }
//   stop() {
//     window.removeEventListener("scroll", this.checkDistance);
//   }
// }
