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
