export default class Modal {
  constructor(open, close, container, active, event) {
    this.open = document.querySelector(open)
    this.close = document.querySelector(close)
    this.container = document.querySelector(container)
    this.active = active
    this.eventToggleModal = this.eventToggleModal.bind(this)
    this.clickOutsideModal = this.clickOutsideModal.bind(this)
    if (this.event === undefined) this.event = "click";
    else this.event = event;
  }
  clickOutsideModal(event) {
    return event.target === this.container ? this.toggleModal() : undefined;
  }
  toggleModal() {
    this.container.classList.toggle(this.active)
  }
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal()
  }
  addEvent() {
    this.open.addEventListener(this.event, this.eventToggleModal)
    this.close.addEventListener(this.event, this.eventToggleModal)
    this.container.addEventListener(this.event, this.clickOutsideModal)
  }
  init() {
    if (this.open && this.close && this.container) {
      this.addEvent()
    }
    return this;
  }
}
