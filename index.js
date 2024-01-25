const chevronUp = document.querySelector(".chevron-up");
const chevronDown = document.querySelector(".chevron-down");
const headerTwo = document.querySelector(".header-two");
const calendarDate = document.querySelectorAll(".calendar-date");
const timeBlockButton = document.querySelectorAll(".time-block-button");

chevronUp.addEventListener("click", () => {
  headerTwo.style.display = "none";
  chevronDown.style.display = "block";
  chevronDown.addEventListener("click", () => {
    headerTwo.style.display = "flex";
    chevronDown.style.display = "none";
  });
});

const removeActiveDate = () => {
  calendarDate.forEach((date) => {
    date.classList.remove("date-active");
  });
};

calendarDate.forEach((date) =>
  date.addEventListener("click", (e) => {
    removeActiveDate();
    e.target.classList.toggle("date-active");
  })
);

const removeActiveTimeBlock = () => {
  timeBlockButton.forEach((block) => {
    block.classList.remove("time-block-active");
  });
};

timeBlockButton.forEach((block) => {
  block.addEventListener("click", (e) => {
    removeActiveTimeBlock();
    e.target.classList.toggle("time-block-active");
  });
});
