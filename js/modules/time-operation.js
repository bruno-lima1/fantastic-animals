export default function initTimeOperation() {
  const timeOperation = document.querySelector("[data-days]");
  if (timeOperation) {
    const daysOpen = timeOperation.dataset.days.split(", ").map(Number);
    const hoursOpen = timeOperation.dataset.hours.split(", ").map(Number);
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentHour = currentDate.getHours();
    const dayIsOpen = daysOpen.indexOf(currentDay) !== -1;
    const hourIsOpen = hoursOpen[0] <= currentHour && hoursOpen[1] > currentHour;
    if (dayIsOpen && hourIsOpen) {
      timeOperation.classList.add("active");
    }
  }
}





























// export default class TimeOperation {
//   constructor(timeOperation) {
//     this.timeOperation = document.querySelector(timeOperation);
//     this.active = "active"
//   }
//   init() {
//     if (this.timeOperation) {
//       this.operationOpen()
//       this.currentTime()
//       this.calculateOpen()
//       this.enableOpen()
//     }
//     return this;
//   }
//   operationOpen() {
//     this.daysOpen = this.timeOperation.dataset.days.split(", ").map(Number);
//     this.hoursOpen = this.timeOperation.dataset.hours.split(", ").map(Number);
//   }
//   currentTime() {
//     const currentDate = new Date();
//     this.currentDay = currentDate.getDay();
//     this.currentHour = currentDate.getUTCHours() - 3;
//   }
//   calculateOpen() {
//     this.dayIsOpen = this.daysOpen.indexOf(this.currentDay) !== -1;
//     this.hourIsOpen = this.hoursOpen[0] <= this.currentHour && this.hoursOpen[1] > this.currentHour;
//   }
//   enableOpen() {
//     if (this.dayIsOpen && this.hourIsOpen) {
//       this.timeOperation.classList.add(this.active);
//     }
//   }
// }
