export default function initScrollAnimation() {
  const sections = document.querySelectorAll("[data-scroll-animation]");
  if (sections.length) {
    const screenHalf = window.innerHeight * 0.6;
    sections.forEach((section) => {
      window.addEventListener("scroll", showSections);
      function showSections() {
        const sectionIsVisible =
          section.getBoundingClientRect().top - screenHalf < 0;
        section.classList.toggle("active", sectionIsVisible);
      }
    });
  }
}






























// import debounce from "./debounce.js";

// export default class ScrollAnimation {
//   constructor(sections) {
//     this.sections = document.querySelectorAll(sections)
//     this.getOffset = debounce(this.getOffset.bind(this), 50)
//     this.screenHalf = window.innerHeight * 0.6;
//     this.active = "active";
//   }
//   init() {
//     if (this.sections.length) {
//       this.addEvent()
//     }
//     return this;
//   }
//   addEvent() {
//     window.addEventListener("scroll", this.getOffset)
//   }
//   getOffset() {
//     this.distance = [...this.sections].map((section) => {
//       const offsetTop = section.offsetTop;
//       return {
//         element: section,
//         offset: Math.floor(offsetTop - this.screenHalf),
//       }
//     })
//     return this.enableAnimation()
//   }
//   enableAnimation() {
//     this.distance.forEach((item) => {
//       return window.scrollY > item.offset
//         ? item.element.classList.add(this.active)
//         : item.element.classList.remove(this.active)
//     })
//   }
//   stop() {
//     window.removeEventListener("scroll", this.getOffset)
//   }
// }
