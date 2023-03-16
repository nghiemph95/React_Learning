// let moonTime = require("moon-time");
import moonTime from "moon-time";

function getLunarDay(inputDate) {
  if (!inputDate) return "";

  // // First check for the pattern
  // var regex_date = /^\d{4}\-\d{1,2}\-\d{1,2}$/;

  // if ((!regex_date.test(inputDate))) {
  //   return "";
  // }

  const [year, month, day] = inputDate.includes("-")
    ? inputDate.split("-")
    : inputDate.includes("/")
    ? inputDate.split("/")
    : "";

  // Check the ranges of month and year
  if (year < 2000 || year > 2100 || month === 0 || month > 12) {
    return "";
  }

  let result = "";
  let moonTimes = moonTime({
    day: +day,
    month: +month,
    year: +year,
  });

  console.log("moonTime", moonTimes);

  for (const time in moonTimes) {
    let word = "";

    if (moonTimes[time] < 10) {
      word = `0${moonTimes[time]}/`;
    } else if (
      moonTimes[time].toString().includes("闰") &&
      moonTimes[time].split("").length === 2
    ) {
      word = `${moonTimes[time].replace("闰", "0")}/`;
    } else if (
      moonTimes[time].toString().includes("闰") &&
      moonTimes[time].split("").length === 3
    ) {
      word = `${moonTimes[time].replace("闰", "")}/`;
    } else {
      word = `${moonTimes[time]}/`;
    }

    result = result + word;
  }
  return result.slice(0, 10);
}

console.log(new Date(getLunarDay("2023/03/20")).getDate());

for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(i));
}
