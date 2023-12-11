import initOutsideClick from "./outsideclick.js";

export default function initDropdownMenu() {
  const menu = document.querySelector("[data-dropdown-menu]");
  if (menu) {
      menu.addEventListener("click", showDropdownMenu);
    function showDropdownMenu(event) {
      event.preventDefault();
      menu.classList.toggle("active");
      initOutsideClick(menu, ["click"], () => {
        menu.classList.remove("active");
      });
    }
  }
}
