
// this finds the element with the id of "date"
const date = document.querySelector("#date");

// this finds the element with the id of "currentyear"
const currentyear = document.querySelector("#currentyear");

// this updates the innerHTML of the #date element to show the document's last modified date/time
date.innerHTML = `Last Updated: ${document.lastModified}`;

// this updates the innerHTML of the #currentyear element to show the current year dynamically
currentyear.innerHTML = `&copy; ${new Date().getFullYear()} | Kobe Lemon | Utah, USA`;