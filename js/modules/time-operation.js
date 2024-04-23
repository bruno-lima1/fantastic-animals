export default class TimeOperation {
  constructor(timeOperation) {
    this.timeOperation = document.querySelector(timeOperation);
    this.active = "active"
  }
  init() {
    if (this.timeOperation) {
      this.timeOpen();
      this.currentTime()
      this.calculateTimeOperation();
      this.enableVerification()
    }
    return this;
  }
  timeOpen() {
    this.daysOpen = this.timeOperation.dataset.days.split(", ").map(Number);
    this.hoursOpen = this.timeOperation.dataset.hours.split(", ").map(Number);
  }
  currentTime() {
    const currentDate = new Date();
    this.currentDay = currentDate.getDay();
    this.currentHour = currentDate.getUTCHours() - 3;
  }
  calculateTimeOperation() {
    this.dayIsOpen = this.daysOpen.indexOf(this.currentDay) !== -1;
    this.hourIsOpen = this.hoursOpen[0] <= this.currentHour && this.hoursOpen[1] > this.currentHour;
  }
  enableVerification() {
    if (this.dayIsOpen && this.hourIsOpen) {
      this.timeOperation.classList.add(this.active);
    }
  }
}
