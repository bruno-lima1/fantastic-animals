import outsideClick from "./outsideclick.js";

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");
  if (dropdownMenus) {
    dropdownMenus.forEach((menu) => {
      ["touchstart", "click"].forEach((userEvent) => {
        menu.addEventListener(userEvent, showDropdownMenu);
      });
    });
    function showDropdownMenu(event) {
      event.preventDefault();
      this.classList.toggle("active");
      
    }
  }
}
