// find the element with the id of "copyrightYear" & update the innerHTML element to show the current year dynamically
document.getElementById("copyrightYear").textContent = new Date().getFullYear();
// console.log(document.getElementById("copyrightYear").textContent)

// find the element with the id of "date" & update the innerHTML to show the document's last modified date/time
document.getElementById("lastModified").textContent = document.lastModified;
// console.log(document.getElementById("lastModified").textContent)

// open & close the hamburger menu when in small & tablet views
// could also be rewritten to do the same thing but when the button is hovered
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
    document.getElementById("navbar").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

const weekDaynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
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
const d = new Date();
const weekDayNumber = d.getDay()
const weekDayName = weekDaynames[weekDayNumber];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = `${weekDayName}, ${d.getDate()} ${monthName} ${year}`;
document.getElementById("currentDate").innerHTML = fulldate;

console.log(weekDayName)
console.log(weekDayNumber)

if (weekDayNumber == 1 || weekDayNumber == 2){
	console.log(weekDayNumber)
    document.getElementById("chamberMeetingBanner").style.display = "block";
}
else {
    document.getElementById("chamberMeetingBanner").style.display = "none";
}