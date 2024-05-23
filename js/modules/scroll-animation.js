import debounce from "./debounce.js"

export default class ScrollAnimation {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections)
    this.enableScrollAnimation = debounce(this.enableScrollAnimation.bind(this), 25)
    this.screenHalf = window.innerHeight * .6
  }
  init() {
    if (this.sections.length) {
      this.scrollEvent()
    }
    return this;
  }
  scrollEvent() {
    window.addEventListener("scroll", this.enableScrollAnimation)
  }
  enableScrollAnimation() {
    console.log("test")
    this.sections.forEach((section) => {
      return section.offsetTop - this.screenHalf < window.scrollY
        ? section.classList.add("active")
        : section.classList.remove("active")
    })
  }
}











































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
