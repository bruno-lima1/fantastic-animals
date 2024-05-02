











































// import debounce from "./debounce.js"

// export default class ScrollAnimation {
//   constructor(sections) {
//     this.sections = document.querySelectorAll(sections)
//     this.getOffsetTop = debounce(this.getOffsetTop.bind(this), 50);
//     this.screenHalf = window.innerHeight * .7;
//     this.active = "active";
//   }
//   init() {
//     if (this.sections.length) {
//       this.addEvent()
//     }
//     return this;
//   }
//   addEvent() {
//     window.addEventListener("scroll", this.getOffsetTop)
//   }
//   getOffsetTop() {
//     this.data = [...this.sections].map((section) => {
//       return {
//         element: section,
//         offset: Math.floor(section.offsetTop - this.screenHalf),
//       }
//     })
//     return this.enableScrollAnimation()
//   }
//   enableScrollAnimation() {
//     this.data.forEach((infos) => {
//       return window.scrollY > infos.offset
//         ? infos.element.classList.add(this.active)
//         : infos.element.classList.remove(this.active)
//     })
//   }
//   stop() {
//     window.removeEventListener("scroll", this.getOffsetTop)
//   }
// }
