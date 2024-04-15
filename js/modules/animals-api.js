import initNumberAnimation from "./number-animation.js";

export default function initAnimalsApi() {
  const animalsApi = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      data.forEach((values) => {
        changeTags(values);
      });
      initNumberAnimation();
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
// const numberAnimation = new NumberAnimation(".numeros span",".numeros","active");
// numberAnimation.init();

// import initNumberAnimation from "./number-animation.js";

// export default function animalsApi(url, target) {
//   const numberSection = document.querySelector(target);
//   const createAnimals = async () => {
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       data.forEach((values) => {
//         fill(values)
//       });
//       numberAnimation()
//     } catch (erro) {
//       console.log(erro);
//     }
//   };
//   const fill = (values) => {
//     const animalSection = createTags(values)
//     numberSection.appendChild(animalSection);
//   }
//   const numberAnimation = () => {
//     initNumberAnimation();
//   }
//   const createTags = (values) => {
//     const div = document.createElement("div");
//     div.innerHTML = `<h3>${values.specie}</h3><span>${values.total}</span>`;
//     return div;
//   };
//   return createAnimals()
// }
