const increaseBtn = document.getElementById('increaseButton');
const decreaseBtn = document.getElementById('decreaseButton');
const countElement = document.getElementById('count');

let count = 0;

//user clicks the + , the count increase 1
increaseBtn.addEventListener('click', () => {
    count += 1;
    updateCount();
});

//user clicks the – , the count decrease 1
decreaseBtn.addEventListener('click', () => {
    count -= 1;
    updateCount();
});

//function updates the counter on the screen
function updateCount(){
    //sets the text content to the current count value
    countElement.textContent = count; 
}