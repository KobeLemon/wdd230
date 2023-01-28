// this finds the element with the class of "copyrightYear"
const copyrightYear = document.querySelector(".copyrightYear");

// this updates the innerHTML of the ".copyrightYear" element to show the current year dynamically
copyrightYear.innerHTML = new Date().getFullYear();

// this finds the element with the class of "lastModified"
const lastModified = document.querySelector(".lastModified");

// this updates the innerHTML of the ".lastModified" element to show the document's last modified date/time
lastModified.innerHTML = document.lastModified;