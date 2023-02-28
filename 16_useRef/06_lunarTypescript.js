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

  let res = "";

  // let moonTimes = moonTime({ day: +day, month: +month, year: +year });
  let moonTimes = moonTime({
    year: +year,
    month: +month,
    day: +day,
  });

  console.log(moonTimes);

  for (const time in moonTimes) {
    let word = `${moonTimes[time]}-`;

    res = res + word;
  }

  return res.slice(0, -12);
}

console.log(getLunarDay("2023-03-18"));
