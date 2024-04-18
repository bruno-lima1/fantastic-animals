import initOutsideClick from "./outsideclick.js"

export default function initDropdownMenu() {
  const menu = document.querySelector("[data-dropdown-menu]");
  if (menu) {
    menu.addEventListener("click", handleClick);
    function handleClick(event) {
      event.preventDefault();
      menu.classList.toggle("active");
      initOutsideClick(menu, () => {
      menu.classList.remove("active");
      })
    }
  }
}





























// import initOutsideClick from "./outsideclick.js";

// export default class DropdownMenu {
//   constructor(menu, active, event) {
//     this.menu = document.querySelector(menu);
//     if (event === undefined) this.event = "click";
//     else this.event = event;
//     this.eventToggleMenu = this.eventToggleMenu.bind(this)
//     this.active = active
//   }
//   toggleMenu() {
//     this.menu.classList.toggle(this.active);
//     initOutsideClick(this.menu, () => {
//     this.menu.classList.remove(this.active);
//     })
//   }
//   eventToggleMenu(event) {
//     event.preventDefault();
//     this.toggleMenu()
//   }
//   addEvent() {
//     this.menu.addEventListener(this.event, this.eventToggleMenu);
//   }
//   init() {
//     if (this.menu) {
//       this.addEvent()
//     }
//     return this;
//   }
// }
