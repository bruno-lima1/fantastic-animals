import NumberAnimation from "./number-animation.js";

export default function initAnimalsApi() {
  const animalsApi = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      data.forEach((values) => {
        changeTags(values);
      });
      const numberAnimation = new NumberAnimation(".numeros span", ".numeros")
      numberAnimation.init()
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


















// import NumberAnimation from "./number-animation.js";

// export default function animalsApi(url, target) {
//   const numberSection = document.querySelector(target);
//   const animalsApi = async () => {
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       data.forEach((values) => {
//         createTags(values);
//       });
//       numberAnimation();
//     } catch (erro) {
//       console.log(erro);
//     }
//   };
//   const numberAnimation = () => {
//     const numberAnimation = new NumberAnimation(".numeros span", ".numeros")
//     numberAnimation.init()
//   }
//   const createTags = (values) => {
//     const div = document.createElement("div");
//     div.innerHTML = `<h3>${values.specie}</h3><span>${values.total}</span>`;
//     return appendContent(div);
//   };
//   const appendContent = (div) => {
//     numberSection.appendChild(div);
//   }
//   return animalsApi();
// }
