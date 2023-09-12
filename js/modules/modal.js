export default function initModal() {
  const open = document.querySelector("[data-modal-open]");
  const close = document.querySelector("[data-modal-close]");
  const container = document.querySelector("[data-modal-container]");
  if (open && close && container) {
    open.addEventListener("click", handleModal);
    close.addEventListener("click", handleModal);
    function handleModal() {
      container.classList.toggle("active");
    }
    container.addEventListener("click", closeModal);
    function closeModal(event) {
      if (event.target === this) {
        container.classList.remove("active");
      }
    }
  }
}
