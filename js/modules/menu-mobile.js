import initOutsideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const button = document.querySelector("[data-menu-mobile]");
  const menu = document.querySelector("[data-menu-list]");
  if (button && menu) {
    button.addEventListener("click", handleClick);
    function handleClick() {
      button.classList.add("active");
      menu.classList.add("active");
      initOutsideClick(menu, () => {
        button.classList.remove("active");
        menu.classList.remove("active");
      });
    }
  }
}
