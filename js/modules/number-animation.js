export default class NumberAnimation {
  constructor(numbers, observerTarget) {
    this.numbers = document.querySelectorAll(numbers);
    this.observerTarget = document.querySelector(observerTarget);
    this.active = "active"
    this.handleNumberAnimation = this.handleNumberAnimation.bind(this)
  }
  init() {
    if (this.numbers.length && this.observerTarget) {
      this.createObserver()
    }
    return this;
  }
  createObserver() {
    this.observer = new MutationObserver(this.handleNumberAnimation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }
  handleNumberAnimation(mutation) {
    if (mutation[0].target.classList.contains(this.active)) {
      this.observer.disconnect()
      return this.numbersIterate();
    }
  };
  numbersIterate() {
    this.numbers.forEach((number) => {
      return this.constructor.activeNumberAnimation(number)
    });
  }
  static activeNumberAnimation(number) {
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
  };
}
