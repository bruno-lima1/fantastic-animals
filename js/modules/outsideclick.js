export default function initOutsideClick(element, callback) {
  const html = document.documentElement;
  const outside = "data-outside";
  if (!element.hasAttribute(outside)) {
    setTimeout(() => html.addEventListener("click", hideDropdownMenu));
    element.setAttribute(outside, "");
  }
  function hideDropdownMenu(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      html.removeEventListener("click", hideDropdownMenu);
      callback();
    }
  }
}
