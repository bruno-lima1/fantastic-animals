export default function initFuncionamento() {
  const operation = document.querySelector("[data-week]");
  if (operation) {
    const weekOpen = operation.dataset.week.split(",").map(Number);
    const timeOpen = operation.dataset.time.split(",").map(Number);
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentHour = currentDate.getHours();
    const weekIsOpen = weekOpen.indexOf(currentDay) !== -1;
    const timeIsOpen = currentHour >= timeOpen[0] && currentHour < timeOpen[1];
    if (weekIsOpen && timeIsOpen) {
      operation.classList.toggle("open");
    }
  }
}
