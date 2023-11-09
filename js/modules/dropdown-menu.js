import initOutsideClick from "./outsideclick.js";

export default function dropdownMenu() {
  const menu = document.querySelector("[data-dropdown]");
  if (menu) {
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, showDropdownMenu);
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
