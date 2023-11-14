// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"

var weatherHeader = document.getElementById("weather-head");
weatherHeader.textContent = "February 10 Weather Forecast, Seattle";

// Change the styling of every element with class "sun" to set the color to "orange"

var sunElements = document.getElementsByClassName("sun");
for (var i = 0; i < sunElements.length; i++){
    sunElements[i].style.color = "orange";
}
// Change the class of the second <li> from to "sun" to "cloudy"

var weatherList = document.getElementById("weather");
var secondListItem = weatherList.getElementsByTagName("li")[1];
secondListItem.classList.remove("sun");
secondListItem.classList.add("cloudy");