// let moonTime = require("moon-time");
import moonTime from "moon-time";

let moonTimes = moonTime({
  day: 18,
  month: 5,
  year: 2023,
});

console.log(moonTimes);
function getLunarDay(moonTimes) {
  let res = "";

  for (const time in moonTimes) {
    let word = `${moonTimes[time]}/`;

    res = res + word;
  }

  return res.slice(0, -1);
}

console.log(getLunarDay(moonTimes));
