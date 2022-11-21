var APIKey = 'af8a40d75abaa39687d28cb67aeb7253';
var city = document.querySelector("#city-input")
var cityNameEl = document.getElementById("city-name")
var mainDateEl = document.getElementById("main-date")
var mainIconImg = document.getElementById("main-icon")
var mainTempEl = document.getElementById("main-temp")
var mainWindEl = document.getElementById("main-wind")
var mainHumidityEl = document.getElementById("main-humidity")
var ulEl = document.getElementById("append-cities")
var createButton = document.createElement("button")


// function getCity() {
// city = 
// console.log(city)

// }

function runSearch () {
    var cityName = city.value
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;

    fetch (queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
    var mainDateinUnix = data.dt
    var mainDate = dayjs.unix(mainDateinUnix).format('MMM D, YYYY');


  var mainIcon = data.weather[0].icon
  var mainTemp = data.main.temp
  var mainHumidity = data.main.humidity
  var findLongitude = data.coord.lon
  var findLatitude = data.coord.lat
  var dataCityName = data.name
  var mainWind = data.wind.speed

mainDateEl.textContent = mainDate
mainIconImg.src = 'http://openweathermap.org/img/wn/' + mainIcon + '@2x.png'
mainTempEl.textContent = 'Temp:' + mainTemp + '°F'
mainWindEl.textContent = 'Wind:' + mainWind + 'MPH'
mainHumidityEl.textContent = 'Humidity:' + mainHumidity + '%'
    // localStorage.setItem(JSON.stringify(data.name), JSON.stringify(data.weather[0].icon), JSON.stringify(data.main.temp))
    // localStorage.setItem(JSON.stringify(data.name), JSON.stringify(data.main.temp))
    // localStorage.setItem(JSON.stringify(data.name), JSON.stringify(data.wind.speed))
    // localStorage.setItem(JSON.stringify(data.name), JSON.stringify(data.main.humidity))

    // getLonAndLat();
  });
}



$('button').click(function (event) {
    event.preventDefault()
    var cityName = city.value
    // getCity();
    console.log(cityName)
    localStorage.setItem('city', JSON.stringify(cityName))
    
    var getCityName = localStorage.getItem('city')
    cityNameEl.textContent = JSON.parse(getCityName)

runSearch();
})


// searchButton();

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
