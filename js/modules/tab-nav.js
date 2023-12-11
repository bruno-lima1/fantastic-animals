export default function initTabNav() {
  const menu = document.querySelectorAll("[data-tab='menu'] img");
  const content = document.querySelectorAll("[data-tab='content'] li");
  if (menu.length && content.length) {
    content[0].classList.add("active");
    menu.forEach((images, index) => {
      images.addEventListener("click", () => {
        activeContent(index);
      });
    });
    function activeContent(index) {
      content.forEach((info) => {
        info.classList.remove("active");
      });
      content[index].classList.toggle("active");
    }
  }
}
