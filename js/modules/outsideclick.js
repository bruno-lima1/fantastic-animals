export default function initClickOutside(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";
  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      html.addEventListener(userEvent, handleOutsideClick);
    });
  }
  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      callback();
    }
  }
}
