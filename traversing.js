// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');
const mainElement = body.querySelector('main');//lets me access <main>
console.log(mainElement);

// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul'); //lets me access <ul>
console.log(ul);

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p'); //lets me access <p>
const thirdListItem = p.parentElement.querySelector('li-nth-child(3)');
console.log(thirdListItem);