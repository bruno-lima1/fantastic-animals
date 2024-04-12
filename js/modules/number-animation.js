export default function initNumberAnimation() {
  const numberAnimation = () => {
    const numbers = document.querySelectorAll(".numeros span");
    numbers.forEach((number) => {
      const numberValues = +number.innerText;
      let start = 0;
      const increment = Math.floor(numberValues / 100);
      const timer = setInterval(() => {
        start += increment;
        number.innerText = start;
        if (start >= numberValues) {
          clearInterval(timer);
          number.innerText = numberValues;
        }
      }, 50 * Math.random());
    });
  };
  const handleNumberAnimation = (mutation) => {
    if (mutation[0].target.classList.contains("active")) {
      numberAnimation();
    }
  };
  const observer = new MutationObserver(handleNumberAnimation);
  const observerTarget = document.querySelector(".numeros");
  observer.observe(observerTarget, { attributes: true });
}


















// export default class NumberAnimation {
//   constructor(numbers, observerTarget, observerClass) {
//     this.numbers = document.querySelectorAll(numbers);
//     this.observerTarget = document.querySelector(observerTarget);
//     this.observerClass = observerClass;
//     this.handleNumberAnimation = this.handleNumberAnimation.bind(this)
//   }
//   static addIncrement(number) {
//     const numberValues = +number.innerText;
//     let start = 0;
//     const increment = Math.floor(numberValues / 100);
//     const timer = setInterval(() => {
//       start += increment;
//       number.innerText = start;
//       if (start >= numberValues) {
//         clearInterval(timer);
//         number.innerText = numberValues;
//       }
//     }, 50 * Math.random());
//   };
//   numberAnimation() {
//     this.numbers.forEach((number) => {
//       this.constructor.addIncrement(number)
//     });
//   }
//   handleNumberAnimation(mutation) {
//     if (mutation[0].target.classList.contains(this.observerClass)) {
//       this.observer.disconnect()
//       this.numberAnimation();
//     }
//   };
//   addMutationObserver() {
//     this.observer = new MutationObserver(this.handleNumberAnimation);
//     this.observer.observe(this.observerTarget, { attributes: true });
//   }
//   init() {
//     if (this.numbers.length && this.observerTarget) {
//       this.addMutationObserver()
//     }
//     return this;
//   }
// }
