import initOutsideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector("[data-menu-mobile]");
  const menuList = document.querySelector("[data-menu-list]");
  if (menuButton && menuList) {
    const events = ["click", "touchstart"];
    events.forEach((events) => {
      menuButton.addEventListener(events, openMenu);
    });
    function openMenu() {
      menuButton.classList.toggle("active");
      menuList.classList.toggle("active");
      initOutsideClick(menuList, events, () => {
        menuList.classList.remove("active");
        menuButton.classList.remove("active");
      });
    }
  }
}
