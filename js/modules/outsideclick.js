export default function initOutsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";
  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => html.addEventListener(userEvent, hideDropdownMenu));
    });
    element.setAttribute(outside, "");
  }
  function hideDropdownMenu(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, hideDropdownMenu);
      });
      callback();
    }
  }
}
