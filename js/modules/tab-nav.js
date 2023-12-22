export default function initTabNav() {
  const menu = document.querySelectorAll("[data-tab-menu] img");
  const content = document.querySelectorAll("[data-tab-content] li");
  if (menu.length && content.length) {
    content[0].classList.add("active");
    menu.forEach((menu, index) => {
      menu.addEventListener("click", () => {
        handleClick(index);
      });
      function handleClick(index) {
        content.forEach((content) => {
          content.classList.remove("active");
        });
        content[index].classList.add("active")
      }
    });
  }
}
