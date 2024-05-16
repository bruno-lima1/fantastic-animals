











































// import debounce from "./debounce.js"

// export default class ScrollAnimation {
//   constructor(sections) {
//     this.sections = document.querySelectorAll(sections)
//     this.enableScrollAnimation = debounce(this.enableScrollAnimation.bind(this), 50)
//     this.screenHalf = window.innerHeight * .7
//   }
//   init() {
//     if (this.sections.length) {
//       this.addEvents()
//     }
//     return this;
//   }
//   addEvents() {
//     window.addEventListener("scroll", this.enableScrollAnimation)
//   }
//   enableScrollAnimation() {
//     this.sections.forEach((section) => {
//       const offsetTop = section.offsetTop
//       return (offsetTop - this.screenHalf) < window.scrollY
//         ? section.classList.add("active")
//         : section.classList.remove("active")
//     })
//   }
// }
