// let moonTime = require("moon-time");
import moonTime from "moon-time";

function getLunarDay(inputDate) {
  if (!inputDate) return "";

  const [year, month, day] = inputDate.includes("-")
    ? inputDate.split("-")
    : inputDate.includes("/")
    ? inputDate.split("/")
    : "";

  console.log([year, month, day]);

  let result = "";
  let moonTimes = moonTime({
    year: +year,
    month: +month,
    day: +day,
  });

  console.log(moonTimes);

  for (const time in moonTimes) {
    let word =
      moonTimes[time] < 10 ? `0${moonTimes[time]}-` : `${moonTimes[time]}-`;

    result = result + word;
  }
  return result.slice(0, 10);
}

console.log(getLunarDay("2023-03-20"));
