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
//   constructor(timeOperation, active) {
//     this.timeOperation = document.querySelector(timeOperation);
//     this.active = active;
//   }
//   init() {
//     if (this.timeOperation) {
//       this.operationData();
//       this.currentData();
//       this.activeOpen();
//     }
//     return this;
//   }
//   operationData() {
//     this.daysOpen = this.timeOperation.dataset.days.split(", ").map(Number);
//     this.hoursOpen = this.timeOperation.dataset.hours.split(", ").map(Number);
//   }
//   currentData() {
//     const currentDate = new Date();
//     this.currentDay = currentDate.getDay();
//     this.currentHour = currentDate.getUTCHours() - 3;
//   }
//   calculateTimeOperation() {
//     const dayIsOpen = this.daysOpen.indexOf(this.currentDay) !== -1;
//     const hourIsOpen =
//       this.hoursOpen[0] <= this.currentHour &&
//       this.hoursOpen[1] > this.currentHour;
//     return dayIsOpen && hourIsOpen;
//   }
//   activeOpen() {
//     if (this.calculateTimeOperation())
//       this.timeOperation.classList.add(this.active);
//   }
// }
