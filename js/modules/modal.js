export default function initModal() {
  const container = document.querySelector("[data-modal-container]");
  const open = document.querySelector("[data-modal-open]");
  const close = document.querySelector("[data-modal-close]");
  if (container && open && close) {
    open.addEventListener("click", handleModal);
    close.addEventListener("click", handleModal);
    container.addEventListener("click", hideModal);
    function handleModal(event) {
      event.preventDefault();
      container.classList.toggle("active");
    }
    function hideModal(event) {
      return event.target === this
        ? container.classList.remove("active")
        : undefined;
    }
  }
}
