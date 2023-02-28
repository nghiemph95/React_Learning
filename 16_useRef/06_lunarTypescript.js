// let moonTime = require("moon-time");
import moonTime from "moon-time";

function getLunarDay(inputDate) {
  if (!inputDate) return "";

  const [year, month, day] = inputDate.includes("-")
    ? inputDate.split("-")
    : inputDate.includes("/")
    ? inputDate.split("/")
    : "";

  let res = "";

  let moonTimes = moonTime({ day: +day, month: +month, year: +year });

  for (const time in moonTimes) {
    let word = `${moonTimes[time]}/`;

    res = res + word;
  }

  return res.slice(0, -1);
}

console.log(getLunarDay("22/3/2023"));
