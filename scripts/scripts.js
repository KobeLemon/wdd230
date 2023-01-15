
// this finds the element with the id of "date"
const last_modified = document.querySelector("#last_modified");

// this finds the element with the id of "currentyear"
const currentyear = document.querySelector("#currentyear");

// this updates the innerHTML of the #date element to show the document's last modified date/time
last_modified.innerHTML = `Last Updated: ${document.lastModified}`;