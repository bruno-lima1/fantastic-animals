











































// import debounce from "./debounce.js"

// export default class ScrollAnimation {
//   constructor(section) {
//     this.section = document.querySelectorAll(section)
//     this.getOffsetTop = debounce(this.getOffsetTop.bind(this), 50)
//     this.screenHalf = window.innerHeight * .7;
//     this.active = "active"
//   }
//   init() {
//     if (this.section.length) {
//       this.addEvent()
//     }
//     return this;
//   }
//   addEvent() {
//     window.addEventListener("scroll", this.getOffsetTop)
//   }
//   getOffsetTop() {
//     const data = [...this.section].map((element) => {
//       return {
//         element,
//         offsetTop: element.offsetTop - this.screenHalf
//       }
//     })
//     return this.enableScrollAnimation(data)
//   }
//   enableScrollAnimation(data) {
//     data.forEach((item) => {
//       return window.scrollY > item.offsetTop
//         ? item.element.classList.add(this.active)
//         : item.element.classList.remove(this.active)
//     })
//   }
//   stop() {
//     window.removeEventListener("scroll", this.getOffsetTop)
//   }
// }
