import initOutsideClick from "./outsideclick.js";

export default function initDropdownMenu() {
  const menu = document.querySelector("[data-dropdown-menu]");
  if (menu) {
    ["touchstart", "click"].forEach((userEvents) => {
      menu.addEventListener(userEvents, showDropdownMenu);
    });
    function showDropdownMenu(event) {
      event.preventDefault();
      menu.classList.toggle("active");
      initOutsideClick(menu, ["touchstart", "click"], () => {
        menu.classList.remove("active");
      });
    }
  }
}
