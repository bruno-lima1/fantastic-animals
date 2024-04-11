import NumberAnimation from "./number-animation.js";

export default function initAnimalsApi() {
  const animalsApi = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      data.forEach((values) => {
        changeTags(values);
      });
      const numberAnimation = new NumberAnimation(".numeros span",".numeros","active");
      numberAnimation.init();
    } catch (erro) {
      console.log(erro);
    }
  };
  animalsApi("./animals-api.json");
  const changeTags = (values) => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${values.specie}</h3><span>${values.total}</span>`;
    const numberSection = document.querySelector("[data-number]");
    numberSection.appendChild(div);
  };
}
