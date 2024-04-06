export default function initModal() {
  const open = document.querySelector("[data-modal-open]")
  const close = document.querySelector("[data-modal-close]")
  const container = document.querySelector("[data-modal-container]")
  function toggleModal(event) {
    event.preventDefault();
    container.classList.toggle("active")
  }
  function clickOutsideModal(event) {
    return event.target === this ? toggleModal(event) : undefined;
  }
  if (open && close && container) {
  open.addEventListener("click", toggleModal)
  close.addEventListener("click", toggleModal)
  container.addEventListener("click", clickOutsideModal)
  }
}






















// export default class Modal {
//   constructor(open, close, container, active) {
//     this.open = document.querySelector(open)
//     this.close = document.querySelector(close)
//     this.container = document.querySelector(container)
//     this.active = active
//     this.eventToggleModal = this.eventToggleModal.bind(this)
//     this.clickOutsideModal = this.clickOutsideModal.bind(this)
//   }
//   clickOutsideModal(event) {
//     return event.target === this.container ? this.toggleModal() : undefined;
//   }
//   toggleModal() {
//     this.container.classList.toggle(this.active)
//   }
//   eventToggleModal(event) {
//     event.preventDefault();
//     this.toggleModal()
//   }
//   addEvent() {
//     this.open.addEventListener("click", this.eventToggleModal)
//     this.close.addEventListener("click", this.eventToggleModal)
//     this.container.addEventListener("click", this.clickOutsideModal)
//   }
//   init() {
//     if (this.open && this.close && this.container) {
//       this.addEvent()
//     }
//     return this;
//   }
// }
