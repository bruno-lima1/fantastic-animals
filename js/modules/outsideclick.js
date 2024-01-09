export default function initOutsideClick(element, click, callback) {
  const html = document.documentElement;
  const outside = "data-outside";
  if (!element.hasAttribute(outside)) {
    html.addEventListener("click", handleClick);
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
