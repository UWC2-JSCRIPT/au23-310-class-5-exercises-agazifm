// If an li element is clicked, toggle the class "done" on the <li>

// If a delete link is clicked, delete the li element / remove from the DOM

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)

document.addEventListener('DOMContentLoaded', function() {

//new list item function provided
const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value.trim(); // use this text to create a new <li>

  // Finish function here  
  //checks for a valid input
  if(text !== ''){
    //creates a new list & span elements
    const newListItem = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = text;

    //creates a delete link element
    const deleteLink = document.createElement('a');
    deleteLink.classList.add('delete'); //add 'delete' class to delete link
    deleteLink.textContent = 'Delete';

    //attaches span & deleteLink to newListItem
    newListItem.appendChild(span);
    newListItem.appendChild(deleteLink);

    //adds a click event listener to newListItem, to toggle 'done' class
    newListItem.addEventListener('click', function(event) {
      if (event.target.tagName === 'LI') {
        event.target.classList.toggle('done');
      }
    });

    //appends newListItem to '.today-list'
    document.querySelector('.today-list').appendChild(newListItem);

    //clears the input
    input.value = '';
  }
};
 
//add anoher click event listner to handle LI clicks & delete clicks
document.querySelector('.today-list').addEventListener('click', function(event) {
  const target = event.target;

  //toggle 'done' class if the clicked item is an LI
  if (target.tagName === 'LI'){
    target.classList.toggle('done');
  }
  //remove parent LI if clicked element has 'delete'
  if (target.classList.contains('delete')){
    target.parentNode.remove();
  }
});

//listen for clicks on '.add-item' to add a new list item
document.querySelector('.add-item').addEventListener('click', addListItem);
});