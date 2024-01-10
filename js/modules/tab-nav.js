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
