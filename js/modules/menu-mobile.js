import initOutsideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector("[data-menu-mobile]");
  const menuList = document.querySelector("[data-menu-list]");
  if (menuButton && menuList) {
      menuButton.addEventListener("click", openMenu);
    function openMenu() {
      menuButton.classList.toggle("active");
      menuList.classList.toggle("active");
      initOutsideClick(menuList, () => {
        menuList.classList.remove("active");
        menuButton.classList.remove("active");
      });
    }
  }
}
