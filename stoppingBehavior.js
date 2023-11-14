//broke up the original comments provided in assignments to guide my code, down below
// Should *not* alert "meow" 

document.addEventListener('DOMContentLoaded', function(){
  //
  document.getElementById('more-info').addEventListener('click',function(event){
    //prevents default behavior of following the url link
    event.preventDefault();
    // When clicked, "More info" link should alert "Here's some info"
    alert("Here's some info");
  });

  //dog buttom
  document.getElementById('dog').addEventListener('click', function(event){
    // When the bark button is clicked, should alert "Bow wow!" 
    // instead of going to a new webpage
    alert('Bow wow!');
    //prevents the event from continuiing to bubble up 
    //through the DOM hierarchy
    event.stopPropagation();
  });

  // Do not change// cat button
  document.getElementById('cat').addEventListener('click', () => {
    alert('meow!');
  });

});