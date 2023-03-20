const jsonFile = "json/data.json";

// find the element with the id of "copyrightYear" & update the innerHTML element to show the current year dynamically
document.getElementById("copyrightYear").textContent = new Date().getFullYear();
// console.log(`Current Footer Year: ${document.getElementById("copyrightYear").textContent}`);

// find the element with the id of "date" & update the innerHTML to show the document's last modified date/time
document.getElementById("lastModified").textContent = document.lastModified;
// console.log(`Current Footer Date/Time: ${document.getElementById("lastModified").textContent}`);

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
// console.log(`Weekday Names: ${weekDaynames}`);
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
// console.log(`Months Names: ${months}`);
const d = new Date();
// console.log(`Current Unformatted Date: ${d}`);
const weekDayNumber = d.getDay()
// console.log(`Current Weekday Number: ${weekDayNumber}`);
const weekDayName = weekDaynames[weekDayNumber];
// console.log(`Current Weekday Name: ${weekDayName}`);
const monthName = months[d.getMonth()];
// console.log(`Current Month Name: ${monthName}`);
const year = d.getFullYear();
// console.log(`Current Year Name: ${year}`);
const fulldate = `${weekDayName}, ${d.getDate()} ${monthName} ${year}`;
document.getElementById("currentDate").innerHTML = fulldate;
// console.log(`Current Formatted Date: ${document.getElementById("currentDate").innerHTML}`);

if (weekDayNumber == 1 || weekDayNumber == 2){
	// console.log(`Mon/Tues If Statement True| Current Weekday Number: ${weekDayNumber}`);
    document.getElementById("chamberMeetingBanner").style.display = "block";
	// console.log(`Mon/Tues If Statement True | Set Meeting Banner display to block`);
}
else {
	// console.log(`Mon/Tues If Statement False | Current Weekday Number: ${weekDayNumber}`);
    document.getElementById("chamberMeetingBanner").style.display = "none";
	// console.log(`Mon/Tues If Statement False | Set Meeting Banner display to none`);
}

function randomNumber(array) {
	// console.log(`ArrayLength: ${array.length}`);
	return randomNum = Math.floor(Math.random() * (array.length));
}

function buildMemberArray(companies) {
	// iterate through data.json and check if membership == "Silver" or "Gold", then append that item to a new list. Then return that list.
	let newArray = [];
	companies.forEach((item) => {
		if (item.membership == "Silver" || item.membership == "Gold"){
			newArray.push(item);
		}
	})
	console.log(newArray);
	return newArray;
}

async function homePageSpotlights() {
    const response = await fetch(jsonFile);
    const data = await response.json();
	let memberArray = buildMemberArray(data.companies);
	displaySpotlightsAll(memberArray);
}

const displaySpotlightSingle = (slName, slDescription, slLogo, slWebsite, slPhone, company) => {
	let name = document.getElementById(slName)
	let description = document.getElementById(slDescription);
	// let membershipLevel = document.getElementById(slMembership);
	let logoImg = document.getElementById(slLogo);
	let siteLink = document.getElementById(slWebsite);
	let phoneNum = document.getElementById(slPhone)

	// membershipLevel.textContent = company.membership;
	name.textContent = company.businessName;
	description.textContent = company.businessDescription;
	siteLink.textContent = company.website;
	phoneNum.textContent = company.phone;

	logoImg.setAttribute('src', company.logo);
	logoImg.setAttribute('alt', `Logo of ${company.businessName}`);
	logoImg.setAttribute('loading', 'lazy');
	logoImg.setAttribute('width', '200');
	logoImg.setAttribute('height', '100');
}

const displaySpotlightsAll = (companies) => {
	let randomNum1 = randomNumber(companies);
	console.log(`randomNum1: ${randomNum1}`);
	let random1 = companies[randomNum1];
	console.log(`Random1:`);
	console.table(random1);
	let randomNum2 = randomNumber(companies);
	console.log(`randomNum2: ${randomNum2}`);
	let random2 = companies[randomNum2];
	console.log(`Random2:`);
	console.table(random2);
	let randomNum3 = randomNumber(companies);
	console.log(`randomNum3: ${randomNum3}`);
	let random3 = companies[randomNum3];
	console.log(`Random3:`);
	console.table(random3);

	// These "while" loops check if two spotlights are the same & if true: it will pick a new number until they are different, then it will check the next loop, and then the next, & if all three spotlights are different, it will build the spotlights.
	while (random1 == random2) {
		random2 = companies[randomNumber(companies)];
		console.table(`Random2: ${random2}`);
		if (random1 != random2) {
			break
		}
	}
	while (random1 == random3) {
		random3 = companies[randomNumber(companies)];
		console.table(`Random3: ${random3}`);
		if (random1 != random2) {
			break
		}
	}
	
	while (random2 == random3) {
		random3 = companies[randomNumber(companies)];
		console.table(`Random3: ${random3}`);
		if (random2 != random3) {
			break
		}
	}
    displaySpotlightSingle('slName1','slTag1','slLogo1','slLink1', 'slPhone1', random1);
	displaySpotlightSingle('slName2','slTag2','slLogo2','slLink2', 'slPhone2', random2);
	displaySpotlightSingle('slName3','slTag3','slLogo3','slLink3', 'slPhone3', random3);
}

homePageSpotlights();