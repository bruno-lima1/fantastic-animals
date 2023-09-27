export default function initModal() {
  const open = document.querySelector("[data-modal-open]");
  const close = document.querySelector("[data-modal-close]");
  const container = document.querySelector("[data-modal-container]");
  if (open && close && container) {
    ["touchstart", "click"].forEach((userEvent) => {
      open.addEventListener(userEvent, handleModal);
      close.addEventListener(userEvent, handleModal);
      container.addEventListener(userEvent, outsideClick);
    });
    function handleModal(event) {
      event.preventDefault();
      container.classList.toggle("active");
    }
    function outsideClick(event) {
      if (event.target === this) {
        container.classList.remove("active");
      }
    }
  }
}
