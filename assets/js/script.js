//Button Variables
var APIKey = 'af8a40d75abaa39687d28cb67aeb7253';
var city = document.querySelector("#city-input")
var cityNameEl = document.getElementById("city-name")

//Main Date Elements
var mainDateEl = document.getElementById("main-date")
var mainIconImg = document.getElementById("main-icon")
var mainTempEl = document.getElementById("main-temp")
var mainWindEl = document.getElementById("main-wind")
var mainHumidityEl = document.getElementById("main-humidity")

//Search History Elements
var ulEl = document.getElementById("search-history")

// 5day Forecast Elements - Day 1
var day1dateEl = document.getElementById("date5")
var day1iconEl = document.getElementById("icon5")
var day1tempEl = document.getElementById("temp5")
var day1windEl = document.getElementById("wind5")
var day1humidityEl = document.getElementById("humidity5")

// 5day Forecast Elements - Day 2
var day2dateEl = document.getElementById("date4")
var day2iconEl = document.getElementById("icon4")
var day2tempEl = document.getElementById("temp4")
var day2windEl = document.getElementById("wind4")
var day2humidityEl = document.getElementById("humidity4")

// 5day Forecast Elements - Day 3
var day3dateEl = document.getElementById("date3")
var day3iconEl = document.getElementById("icon3")
var day3tempEl = document.getElementById("temp3")
var day3windEl = document.getElementById("wind3")
var day3humidityEl = document.getElementById("humidity3")

// 5day Forecast Elements - Day 4
var day4dateEl = document.getElementById("date2")
var day4iconEl = document.getElementById("icon2")
var day4tempEl = document.getElementById("temp2")
var day4windEl = document.getElementById("wind2")
var day4humidityEl = document.getElementById("humidity2")

// 5day Forecast Elements - Day 5
var day5dateEl = document.getElementById("date1")
var day5iconEl = document.getElementById("icon1")
var day5tempEl = document.getElementById("temp1")
var day5windEl = document.getElementById("wind1")
var day5humidityEl = document.getElementById("humidity1")

  // Local Storage Variable
  var cityArray = [];

// Inital API call from the city search bar. Click event located on line 239
function runSearch (data) {
    var cityName = city.value
  
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;

    fetch (queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log(data)
  
  //creates variables for each piece of information on the current date
    var mainDateinUnix = data.dt
    var mainDate = dayjs.unix(mainDateinUnix).format('MMM D, YYYY');
    var mainIcon = data.weather[0].icon
    var mainTemp = data.main.temp
    var mainHumidity = data.main.humidity
    var findLongitude = data.coord.lon
    var findLatitude = data.coord.lat
    var dataCityName = data.name
    var mainWind = data.wind.speed

  // inserts current day weather into placeholders
mainDateEl.textContent = mainDate
mainIconImg.src = 'http://openweathermap.org/img/wn/' + mainIcon + '@2x.png'
mainTempEl.textContent = 'Temp: ' + mainTemp + ' °F'
mainWindEl.textContent = 'Wind: ' + mainWind + ' MPH'
mainHumidityEl.textContent = 'Humidity: ' + mainHumidity + ' %'

// pushes data to have city name, longitude and latitiude to call the 5 day forecast in next API line
  var urlInfo = []; 
  urlInfo.push(findLongitude)
  urlInfo.push(findLatitude)
  urlInfo.push(dataCityName)

    get5DayForecast(urlInfo);
}  
  )}


// API call to get the 5 day forecast
  function get5DayForecast (urlInfo) {
    var requestForecastUrl = "http://api.openweathermap.org/data/2.5/forecast?lat=" + urlInfo[1]+"&lon=" + urlInfo[0] + "&appid=" + APIKey

    fetch (requestForecastUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    getday1to5Arrays(data)
  })
  }

  // gets all information on the 5 day forecast and puts them all into arrays
  function getday1to5Arrays (data) {
    // Day 1
    var day1Date = data.list[1].dt
      var day1DateConverted = dayjs.unix(day1Date).format('MMM D, YYYY');
    var day1Icon = data.list[1].weather[0].icon
    var day1Temp = data.list[1].main.temp
    var day1Wind = data.list[1].wind.speed
    var day1Humidity = data.list[1].main.humidity

    var day1Info = [];
    day1Info.push(day1DateConverted)
    day1Info.push(day1Icon)
    day1Info.push(day1Temp)
    day1Info.push(day1Wind)
    day1Info.push(day1Humidity)
    
    // Day 2
    var day2Date = data.list[9].dt
      var day2DateConverted = dayjs.unix(day2Date).format('MMM D, YYYY');
    var day2Icon = data.list[9].weather[0].icon
    var day2Temp = data.list[9].main.temp
    var day2Wind = data.list[9].wind.speed
    var day2Humidity = data.list[9].main.humidity

    var day2Info = [];
    day2Info.push(day2DateConverted)
    day2Info.push(day2Icon)
    day2Info.push(day2Temp)
    day2Info.push(day2Wind)
    day2Info.push(day2Humidity)

    //Day 3
    var day3Date = data.list[17].dt
      var day3DateConverted = dayjs.unix(day3Date).format('MMM D, YYYY');
    var day3Icon = data.list[17].weather[0].icon
    var day3Temp = data.list[17].main.temp
    var day3Wind = data.list[17].wind.speed
    var day3Humidity = data.list[17].main.humidity

    var day3Info = [];
    day3Info.push(day3DateConverted)
    day3Info.push(day3Icon)
    day3Info.push(day3Temp)
    day3Info.push(day3Wind)
    day3Info.push(day3Humidity)

    //Day 4
    var day4Date = data.list[25].dt
      var day4DateConverted = dayjs.unix(day4Date).format('MMM D, YYYY');
    var day4Icon = data.list[25].weather[0].icon
    var day4Temp = data.list[25].main.temp
    var day4Wind = data.list[25].wind.speed
    var day4Humidity = data.list[25].main.humidity
    
    var day4Info = [];
    day4Info.push(day4DateConverted)
    day4Info.push(day4Icon)
    day4Info.push(day4Temp)
    day4Info.push(day4Wind)
    day4Info.push(day4Humidity)

    //Day 5
    var day5Date = data.list[33].dt
      var day5DateConverted = dayjs.unix(day5Date).format('MMM D, YYYY');
    var day5Icon = data.list[33].weather[0].icon
    var day5Temp = data.list[33].main.temp
    var day5Wind = data.list[33].wind.speed
    var day5Humidity = data.list[33].main.humidity

    var day5Info = [];
    day5Info.push(day5DateConverted)
    day5Info.push(day5Icon)
    day5Info.push(day5Temp)
    day5Info.push(day5Wind)
    day5Info.push(day5Humidity)
    
    loadDay1(day1Info);
    loadDay2 (day2Info);
    loadDay3 (day3Info);
    loadDay4 (day4Info);
    loadDay5 (day5Info);

  }
  
  // Functions to insert all 5-day forecast information into their respective placeholders
  function loadDay5 (day5Info) {
    day5dateEl.textContent = day5Info[0]
    day5iconEl.src = 'http://openweathermap.org/img/wn/' + day5Info[1] + '@2x.png'
    day5tempEl.textContent = 'Temp:' + day5Info[2] + '°F'
    day5windEl.textContent = 'Wind:' + day5Info[3] + 'MPH'
    day5humidityEl.textContent = 'Humidity:' + day5Info[4] + '%'
  }

  function loadDay4 (day4Info) {
    day4dateEl.textContent = day4Info[0]
    day4iconEl.src = 'http://openweathermap.org/img/wn/' + day4Info[1] + '@2x.png'
    day4tempEl.textContent = 'Temp:' + day4Info[2] + '°F'
    day4windEl.textContent = 'Wind:' + day4Info[3] + 'MPH'
    day4humidityEl.textContent = 'Humidity:' + day4Info[4] + '%'
  }

  function loadDay3 (day3Info) {
    day3dateEl.textContent = day3Info[0]
    day3iconEl.src = 'http://openweathermap.org/img/wn/' + day3Info[1] + '@2x.png'
    day3tempEl.textContent = 'Temp:' + day3Info[2] + '°F'
    day3windEl.textContent = 'Wind:' + day3Info[3] + 'MPH'
    day3humidityEl.textContent = 'Humidity:' + day3Info[4] + '%'
  }

  function loadDay2 (day2Info) {
    day2dateEl.textContent = day2Info[0]
    day2iconEl.src = 'http://openweathermap.org/img/wn/' + day2Info[1] + '@2x.png'
    day2tempEl.textContent = 'Temp:' + day2Info[2] + '°F'
    day2windEl.textContent = 'Wind:' + day2Info[3] + 'MPH'
    day2humidityEl.textContent = 'Humidity:' + day2Info[4] + '%'
  }

  function loadDay1(day1Info) {
    day1dateEl.textContent = day1Info[0]
    day1iconEl.src = 'http://openweathermap.org/img/wn/' + day1Info[1] + '@2x.png'
    day1tempEl.textContent = 'Temp:' + day1Info[2] + '°F'
    day1windEl.textContent = 'Wind:' + day1Info[3] + 'MPH'
    day1humidityEl.textContent = 'Humidity:' + day1Info[4] + '%'
  }

  //gets the information inputted into the search field
$('button').click(function (event) {
    event.preventDefault()
    var cityName = city.value
    cityNameEl.textContent = cityName //updates intital city placeholder
    
    runSearch()
    getStored(cityName)
  })

// separate function to check local Storage for information to populate recently searched
  function getStored(cityName) {
    ulEl.textContent = "" //clears recently searched inputs
    var cityButtons = JSON.parse(localStorage.getItem("cities")) //finds items in the Local Storage and populates it, at the moment, only when the "search" button is clicked
    
    if(cityButtons !== null){
        cityArray = cityButtons  
      } 
  
    cityArray.push(cityName) // pushes cities into array so that they can be stringed into the Local Storage
    localStorage.setItem('cities', JSON.stringify(cityArray))
    
 // creates the buttons from localStorage 
    for (let i=0; i < cityArray.length; i++) {
      let searchButton = document.createElement("button")
      searchButton.textContent = cityArray[i]
      ulEl.append(searchButton) 
  
// When button is clicked, it's innerHTML is created into a variable making it possible to make a call using the city name to the API
      $(searchButton).click(function (event) {
        var searchClicked = event.target.innerHTML
        cityNameEl.textContent = searchClicked
          console.log(searchClicked)
        var queryURL2 = "http://api.openweathermap.org/data/2.5/weather?q=" + searchClicked + "&appid=" + APIKey;

    fetch (queryURL2)
  .then(function (response) {
    return response.json();
  })
  .then(function (data){ 
    getInfoAgain(data); //instead of going back to "runSearch" function, new function is created to avoid possible clashes
  })
      })
}
  }

//searches the Recently Changed Information; variable names are kept the same since they do mean the same thing as in the "runSearch" function
function getInfoAgain (data) {
  
  //creates variables for each piece of information on the current date
  var mainDateinUnix = data.dt
  var mainDate = dayjs.unix(mainDateinUnix).format('MMM D, YYYY');
  var mainIcon = data.weather[0].icon
  var mainTemp = data.main.temp
  var mainHumidity = data.main.humidity
  var findLongitude = data.coord.lon
  var findLatitude = data.coord.lat
  var dataCityName = data.name
  var mainWind = data.wind.speed

  // inserts current day weather into placeholders
mainDateEl.textContent = mainDate
mainIconImg.src = 'http://openweathermap.org/img/wn/' + mainIcon + '@2x.png'
mainTempEl.textContent = 'Temp: ' + mainTemp + ' °F'
mainWindEl.textContent = 'Wind: ' + mainWind + ' MPH'
mainHumidityEl.textContent = 'Humidity: ' + mainHumidity + ' %'

// pushes data to have city name, longitude and latitiude to call the 5 day forecast in next API line
var urlInfo = []; 
urlInfo.push(findLongitude)
urlInfo.push(findLatitude)
urlInfo.push(dataCityName)

  get5DayForecast(urlInfo); //loops this information into the previous 5dayforecast function to get the next 5 days
}

getStored();