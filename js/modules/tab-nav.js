export default function initTabNav() {
  const images = document.querySelectorAll("[data-tab-menu] img");
  const contents = document.querySelectorAll("[data-tab-content] li");
  if (images.length && contents.length) {
    contents[0].classList.add("active");
    images.forEach((image, index) => {
      image.addEventListener("click", () => {
        handleClick(index);
      });
      function handleClick(index) {
        contents.forEach((content) => {
          content.classList.remove("active");
        });
        contents[index].classList.add("active");
      }
    });
  }
}





















// export default class TabNav {
//   constructor(images, contents) {
//     this.images = document.querySelectorAll(images);
//     this.contents = document.querySelectorAll(contents);
//   }
//   showContent(index) {
//     this.contents.forEach((content) => {
//       content.classList.remove("active");
//     });
//     this.contents[index].classList.add("active");
//   }
//   addEvent() {
//     this.images.forEach((image, index) => {
//       image.addEventListener("click", () => {
//         this.showContent(index);
//       });
//     });
//   }
//   init() {
//     if (this.images.length && this.contents.length) {
//       this.showContent(0);
//       this.addEvent()
//     }
//     return this;
//   }
// }
