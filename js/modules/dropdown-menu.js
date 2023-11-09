import initOutsideClick from "./outsideclick.js";

<<<<<<< HEAD
export default function dropdownMenu() {
  const menu = document.querySelector("[data-dropdown]");
=======
export default function initDropdownMenu() {
  const menu = document.querySelector("[data-dropdown-menu]");
>>>>>>> 8daebf73068f13b99fc0003f2f7dc63e81380efd
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
