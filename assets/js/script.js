var APIKey = 'af8a40d75abaa39687d28cb67aeb7253';
var city = document.querySelector("input").value

$('button').click(function() {
    localStorage.setItem('city', JSON.stringify(city))
    window.location.replace("searchResults.html")
    localStorage.getItem(city)
    $("#city-name").textContent(city)
    console.log(city)
  
runSearch();
})

function runSearch () {
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

    fetch (queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
    console.log(data.coord);
    console.log(data.name)
    localStorage.setItem(JSON.stringify(data.name), JSON.stringify(data.coord))

//     // getLonAndLat();
  });
}


// var city = "New York"
// // var cityInput = HTMLInputElement.value




//  function getLonAndLat() {
//     var lon = localStorage.getItem(data.coord)
//     console.log(lon)
//  }


//   var geoCodeUrl = "http://api.openweathermap.org/geo/1.0/reverse?lat=" + lat + "&lon=" + lon + "&appid="" + APIKey;

//   localStorage.getItem(JSON.parse(city))
//   console.log(city)

// document.querySelector('.btn').addEventListener(onclick, function(){
//     var city = document.createElement('li')

//     $('ul').appendChild(cityName)
// })

// function GetInfo(){
//     window.location.href = 'searchResults.html'

    // var newName = document.getElementById("cityInput")
    // var cityName = document.createElement("button")
    // console.log(newName)
    // console.log(cityName)

    // $('ul').appendChild(cityName).innerHTML(newName)
