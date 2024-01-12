export default function initOutsideClick(element, callback) {
  const html = document.documentElement;
  const outside = "data-outside";
  if (!element.hasAttribute(outside)) {
    setTimeout(() => html.addEventListener("click", handleClick));
    element.setAttribute(outside, "");
  }
  function handleClick(event) {
    if (!element.contains(event.target)) {
      html.removeEventListener("click", handleClick);
      element.removeAttribute(outside);
      callback();
    }
  }
}
