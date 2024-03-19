export default function initNumberAnimation() {
  const numberAnimation = () => {
    const numbersList = document.querySelectorAll(".numeros span");
    numbersList.forEach((number) => {
      const numbers = +number.innerText;
      let start = 0;
      const increment = Math.floor(numbers / 100);
      const timer = setInterval(() => {
        start += increment;
        number.innerText = start;
        if (start >= numbers) {
          clearInterval(timer);
          number.innerText = numbers;
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
