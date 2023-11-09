export default function initOutsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";
  if (!element.hasAttribute(outside)) {
    events.forEach((userEvents) => {
      html.addEventListener(userEvents, hideDropdownMenu);
    });
  }
  function hideDropdownMenu(event) {
    if (!element.contains(event.target)) {
      events.forEach((userEvents) => {
        html.removeEventListener(userEvents, hideDropdownMenu);
      });
      callback();
    }
  }
}
