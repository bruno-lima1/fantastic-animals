export default function initNumberAnimation() {
  const numberAnimation = () => {
    const tagsNumber = document.querySelectorAll(".numeros span");
    tagsNumber.forEach((numbers) => {
      const number = +numbers.innerText;
      const increment = Math.floor(number / 100);
      let start = 0;
      const timer = setInterval(() => {
        start += increment;
        numbers.innerText = start;
        if (start >= number) {
          numbers.innerText = number;
          clearInterval(timer);
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
