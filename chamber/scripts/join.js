const weekDaynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
// console.log(`Weekday Names: ${weekDaynames}`)
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
// console.log(`Months Names: ${months}`)
const d = new Date();
// console.log(`Current Unformatted Date: ${d}`)
const weekDayNumber = d.getDay()
console.log(`Current Weekday Number: ${weekDayNumber}`)
const weekDayName = weekDaynames[weekDayNumber];
// console.log(`Current Weekday Name: ${weekDayName}`)
const monthName = months[d.getMonth()];
// console.log(`Current Month Name: ${monthName}`)
const year = d.getFullYear();
// console.log(`Current Year Name: ${year}`)
const fulldate = `${weekDayName}, ${d.getDate()} ${monthName} ${year}`;
document.getElementById("hiddenDate").value = fulldate;
// console.log(`Current Hidden Date: ${hiddenDate.value}`)