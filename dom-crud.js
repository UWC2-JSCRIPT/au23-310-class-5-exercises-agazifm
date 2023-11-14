// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>

var buyNowLink = document.createElement("a");
buyNowLink.textContent = "Buy Now!";
buyNowLink.id = "cta";
document.body.querySelector("main").appendChild(buyNowLink);

// Access (read) the data-color attribute of the <img>,
// log to the console

var carImage = document.querySelector("img");
var dataColor = carImage.getAttribute("data-color");
console.log("Data Color Attribute:", dataColor);

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"

var listItems = docment.querySelectorAll("ul li");
if (listItems.length >= 3) {
    listItems[2].classList.add("highlight");
}

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

var lastParagraph = docment.querySelector("main p:last-child");
if (lastParagraph){
    lastParagraph.remove();
}