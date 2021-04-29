
const today = new Date();
const week = [today];
let i = 1;
const dotw = [
    "Sun",
    "Mon",
    "Tues",
    "Wed",
    "Thur",
    "Fri",
    "Sat",
]

function parseISOString(s) {
    var b = s.split(/\D+/);
    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
  }


// const dotw = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
// ]

while (week.length < 7){
    let yestderday = new Date(today);
    yestderday.setDate(yestderday.getDate() - i);
    week.unshift(yestderday);
    i++;

}

export {week, dotw, parseISOString};



