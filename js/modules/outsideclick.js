export default function initOutsideClick(element, click, callback) {
  const html = document.documentElement;
  const outside = "data-outside";
  if (!element.hasAttribute(outside)) {
    click.forEach((click) => {
      html.addEventListener(click, hideDropdownMenu);
    });
  }
  function hideDropdownMenu(event) {
    if (!element.contains(event.target)) {
      click.forEach((click) => {
        html.removeEventListener(click, hideDropdownMenu);
      });
      callback();
    }
  }
}
