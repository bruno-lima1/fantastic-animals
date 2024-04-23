import NumberAnimation from "./number-animation.js";

export default function animalsApi(url, section) {
  const numberSection = document.querySelector(section);
  const animalsApi = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      data.forEach((values) => {
        createTags(values);
      });
      activeNumberAnimation()
    } catch (erro) {
      console.log(erro);
    }
  };
  const activeNumberAnimation = () => {
    const numberAnimation = new NumberAnimation(".numeros span", ".numeros")
      numberAnimation.init()
  }
  const createTags = (values) => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${values.specie}</h3><span>${values.total}</span>`;
    return addContent(div)
  };
  const addContent = (div) => {
    numberSection.appendChild(div);
  }
  return animalsApi();
}
