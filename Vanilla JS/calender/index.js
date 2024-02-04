(function init() {
  const currentDate = new Date().getDate();
  const currentMonth = new Date().getMonth() + 1; // 1-12
  const currentYear = new Date().getFullYear();

  const currentMonthContainer = document.querySelector("#currentMonth");
  currentMonthContainer.style.textAlign = "center";
  currentMonthContainer.style.margin = "2rem";
  currentMonthContainer.style.border = "1px solid black";

  generateCalender({
    date: currentDate,
    month: currentMonth,
    year: currentYear,
    wrapper: currentMonthContainer,
  });
})();

function generateCalender({ date, month, year, wrapper }) {
  const weekdayOnFirst = new Date(`${month}/01/${year}`).getDay(); // 1-7

  const numberOfDaysInMonth = new Date(year, month, 0).getDate();

  const calenderHeader = printWeekdays();
  wrapper.appendChild(calenderHeader);

  const calenderContent = printMonthDates({
    highlightDate: date,
    weekdayOnFirst,
    numberOfDaysInMonth,
  });
  wrapper.appendChild(calenderContent);
}

function printWeekdays() {
  const weekdays = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];

  const header = document.createElement("div");
  header.style.display = "grid";
  header.style.gridTemplateColumns = "repeat(7, 1fr)";

  for (let i = 0; i < 7; i++) {
    const day = document.createElement("h4");
    day.textContent = weekdays[i];
    day.style.padding = "0.4rem";
    day.style.border = "1px solid grey";
    day.style.margin = 0;

    header.appendChild(day);
  }

  return header;
}

function printMonthDates({
  highlightDate,
  numberOfDaysInMonth,
  weekdayOnFirst,
}) {
  const container = document.createElement("div");
  container.style.display = "grid";
  container.style.gridTemplateColumns = "repeat(7, 1fr)";

  let isFirstDayOfMonth = true;

  for (let i = 1; i <= numberOfDaysInMonth; i++) {
    const date = document.createElement("div");
    date.textContent = i;

    container.appendChild(date);
    date.style.padding = "0.5rem";
    date.style.border = "1px solid grey";

    if (highlightDate === i) {
      date.style.color = "red";
      date.style.fontWeight = "bold";
    }
    if (isFirstDayOfMonth) {
      if (weekdayOnFirst) date.style.gridColumnStart = weekdayOnFirst;
      else date.style.gridColumnStart = 7;
      isFirstDayOfMonth = false;
    }
  }

  return container;
}

const formSubmit = document.addEventListener("submit", userRequestedCalender);

function userRequestedCalender(e) {
  e.preventDefault();
  const month = document.getElementById("userMonth").value;
  const year = document.getElementById("userYear").value;

  const currentMonthContainer = document.querySelector("#userSelectedCalender");
  currentMonthContainer.innerHTML = "";
  currentMonthContainer.style.textAlign = "center";
  currentMonthContainer.style.margin = "2rem";
  currentMonthContainer.style.border = "1px solid black";

  generateCalender({
    month,
    year,
    wrapper: currentMonthContainer,
  });
}
