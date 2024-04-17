export default class TabNav {
  constructor(image, contents, active, event) {
    this.images = document.querySelectorAll(image);
    this.contents = document.querySelectorAll(contents);
    this.active = active;
    if (this.event === undefined) this.event = "click"
    else this.event = event;
  }
  showContent(index) {
    this.contents.forEach((content) => {
      content.classList.remove(this.active);
    });
    this.contents[index].classList.add(this.active);
  }
  addEvent() {
    this.images.forEach((image, index) => {
      image.addEventListener(this.event, () => {
        this.showContent(index);
      });
    });
  }
  init() {
    if (this.images.length && this.contents.length) {
      this.showContent(0);
      this.addEvent();
    }
    return this;
  }
}
