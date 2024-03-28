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
