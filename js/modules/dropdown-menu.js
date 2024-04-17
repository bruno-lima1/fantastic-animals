import initOutsideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(menu, active, event) {
    this.menu = document.querySelector(menu);
    this.eventToggleMenu = this.eventToggleMenu.bind(this);
    this.active = active;
    if (event === undefined) this.event = "click";
    else this.event = event
  }
  toggleMenu() {
    this.menu.classList.toggle(this.active);
    initOutsideClick(this.menu, () => {
      this.menu.classList.remove(this.active);
    });
  }
  eventToggleMenu(event) {
    event.preventDefault();
    this.toggleMenu()
  }
  addEvent() {
    this.menu.addEventListener(this.event, this.eventToggleMenu);
  }
  init() {
    if (this.menu) {
      this.addEvent();
    }
    return this;
  }
}
