export default function initModal() {
  const open = document.querySelector("[data-modal-open]");
  const close = document.querySelector("[data-modal-close]");
  const container = document.querySelector("[data-modal-container]");
  if (open && close && container) {
    open.addEventListener("click", handleClick);
    close.addEventListener("click", handleClick);
    container.addEventListener("click", hideModal);
    function handleClick(event) {
      event.preventDefault();
      container.classList.toggle("active")
    }
    function hideModal(event) {
      return event.target === this ? container.classList.remove("active") : undefined;
    }
  }
}
