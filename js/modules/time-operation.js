export default class TimeOperation {
  constructor(timeOperation) {
    this.timeOperation = document.querySelector(timeOperation);
    this.active = "active";
  }
  init() {
    if (this.timeOperation) {
      this.timeOpen();
    }
    return this;
  }
  timeOpen() {
    this.daysOpen = this.timeOperation.dataset.days.split(", ").map(Number);
    this.hoursOpen = this.timeOperation.dataset.hours.split(", ").map(Number);
    return this.currentTime();
  }
  currentTime() {
    const currentDate = new Date();
    this.currentDay = currentDate.getDay();
    this.currentHour = currentDate.getUTCHours() - 3;
    return this.calculateTimeOperation();
  }
  calculateTimeOperation() {
    this.dayIsOpen = this.daysOpen.indexOf(this.currentDay) !== -1;
    this.hourIsOpen =
      this.hoursOpen[0] <= this.currentHour &&
      this.hoursOpen[1] > this.currentHour;
    return this.enableVerification();
  }
  enableVerification() {
    if (this.dayIsOpen && this.hourIsOpen) {
      this.timeOperation.classList.add(this.active);
    }
  }
}
