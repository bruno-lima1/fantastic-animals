import initOutsideClick from "./outsideclick.js"

export default class DropdownMenu {
  constructor(menu, event) {
    this.menu = document.querySelector(menu);
    this.active = "active"
    if (event === undefined) this.event = "click";
    else this.event === event;
    this.eventToggleMenu = this.eventToggleMenu.bind(this)
  }
  init() {
    if (this.menu) {
      this.addEvent()
    }
    return this;
  }
  addEvent() {
    this.menu.addEventListener(this.event, this.eventToggleMenu);
  }
  eventToggleMenu(event) {
    event.preventDefault();
    return this.toggleMenu()
  }
  toggleMenu() {
    this.menu.classList.toggle(this.active);
    initOutsideClick(this.menu, () => {
    this.menu.classList.remove(this.active);
    })
  }
}
