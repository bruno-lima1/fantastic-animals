export default function initModal() {
  const open = document.querySelector("[data-modal-open]");
  const close = document.querySelector("[data-modal-close]");
  const container = document.querySelector("[data-modal-container]");
  if (open && close && container) {
    function handleModal() {
      container.classList.toggle("active");
    }
    function closeModal(event) {
      if (event.target === this) {
        container.classList.remove("active");
      }
    }
    open.addEventListener("click", handleModal);
    close.addEventListener("click", handleModal);
    container.addEventListener("click", closeModal);
  }
}
