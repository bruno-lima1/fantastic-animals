import initOutsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(button, menu, active, event) {
    this.button = document.querySelector(button);
    this.menu = document.querySelector(menu);
    this.active = active;
    if (event === undefined) this.event = "click";
    else this.event = event;
    this.activeMenu = this.activeMenu.bind(this)
  }
  activeMenu() {
    this.button.classList.add(this.active);
    this.menu.classList.add(this.active);
    initOutsideClick(this.menu, () => {
      this.button.classList.remove(this.active);
      this.menu.classList.remove(this.active);
    });
  }
  addEvent() {
    this.button.addEventListener(this.event, this.activeMenu);
  }
  init() {
    if (this.button && this.menu) {
      this.addEvent()
    }
    return this;
  }
}
