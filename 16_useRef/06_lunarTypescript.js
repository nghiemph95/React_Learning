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

  // console.log(year);
  // console.log([year, month, day]);

  let result = "";
  let moonTimes = moonTime({
    day: +day,
    month: +month,
    year: +year,
  });

  for (const time in moonTimes) {
    let word = "";

    console.log("data", moonTimes[time]);

    if (moonTimes[time] < 10) {
      word = `0${moonTimes[time]}/`;
    } else if (moonTimes[time] > 10 && moonTimes[time] === "闰") {
      word = `${moonTimes[time]}/`;
    } else {
      word = `${moonTimes[time]}/`;
    }

    result = result + word;
  }
  return result.slice(0, 10);
}

// console.log(getLunarDay("2033/12/23"));
console.log(getLunarDay("2023/03/22"));

console.log("01".split(""));
