// open & close the hamburger menu when in small & tablet views
// could also be rewritten to do the same thing but when the button is hovered
function toggleMenu() {
    console.log("Hamburger Button clicked")
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
    document.getElementById("navbar").classList.toggle("open");
    console.log("Hamburger Menu opened");
}
const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

const daynames = [
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
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;
document.getElementById("currentDate").innerHTML = fulldate;

console.log(dayName)
if (dayName == "Monday" || dayName == "Tuesday"){
    document.querySelector(".chamberMeetingBanner").style.display = "block";
    }
else {
    document.querySelector(".chamberMeetingBanner").style.display = "none";
    }

// find the element with the id of "copyrightYear"
const copyrightYear = document.querySelector(".copyrightYear");

// update the innerHTML of the ".copyrightYear" element to show the current year dynamically
copyrightYear.innerHTML = new Date().getFullYear();

// find the element with the id of "date"
const lastModified = document.querySelector(".lastModified");

// update the innerHTML of the #date element to show the document's last modified date/time
lastModified.innerHTML = document.lastModified;