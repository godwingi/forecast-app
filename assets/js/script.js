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
var createButton = document.createElement("button")

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
  var cityInfoArray = [];

function runSearch (data) {
    var cityName = city.value
  
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;

    fetch (queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log(data)
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

  var urlInfo = []; 
  urlInfo.push(findLongitude)
  urlInfo.push(findLatitude)
  urlInfo.push(dataCityName)
  // console.log(urlInfo)

    get5DayForecast(urlInfo);
    searchHistoryButton (urlInfo)

}  
  )}



  function get5DayForecast (urlInfo) {
    var requestForecastUrl = "http://api.openweathermap.org/data/2.5/forecast?lat=" + urlInfo[1]+"&lon=" + urlInfo[0] + "&appid=" + APIKey

    fetch (requestForecastUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log(data)

    getday1to5Arrays(data)
  })
  }

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
  
  // Functions to insert all information into their respective placeholders
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

$('button').click(function (event) {
    event.preventDefault()
    var cityName = city.value
    // getCity();
    // console.log(cityName)
    localStorage.setItem('city', JSON.stringify(cityName))
    
    var getCityName = localStorage.getItem('city')
    cityNameEl.textContent = JSON.parse(getCityName)

runSearch();
})

function searchHistoryButton (urlInfo) {
var searchButton = document.createElement("button");
ulEl.append(searchButton) 
searchButton.setAttribute("id", urlInfo[2])
// cityInfoArray.push(urlInfo[2])
  
console.log(cityInfoArray + ' --> this is the city info array')
searchButton.textContent = urlInfo[2]
cityInfoArray.push(searchButton.textContent)
localStorage.setItem(JSON.stringify(searchButton.textContent),JSON.stringify(cityInfoArray))

//LOCAL STORAGE
// cityInfoArray.forEach(array)

//   function array(item, index, arr) {
//   console.log(item)
//   }
  
$(searchButton).click(function(event) {
    event.preventDefault()

    $("button").on('click', function (event) {
      event.preventDefault;
      
      let newIds = $(this).attr("id");  
       console.log(newIds)
  
       if(searchButton.textContent == newIds){
var searchURL = "http://api.openweathermap.org/data/2.5/weather?q=" + newIds + "&appid=" + APIKey;

    fetch (searchURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)

  runSearch(data)
  
    })} else {
      console.log("nope")
    }}
)})}
  // function searchAgain(newIds) {
  // var searchURL = "http://api.openweathermap.org/data/2.5/weather?q=" + newIds + "&appid=" + APIKey;

  //   fetch (searchURL)
  // .then(function (response) {
  //   return response.json();
  // })
  // .then(function (data) {
  //   console.log(data)

  // runSearch(data)
  // })}

//     $("button").click(log($(this).attr("id")));  
// function log(id) {
//        var IdIndex = [];
//        IdIndex.push(id.value)
//        console.log(IdIndex)
    
//     console.log("It works!")
    // var oldWeather = localStorage.getItem(getKey)
    // console.log(oldWeather)
 
// if(IdIndex == cityInfoArray[i]) {
//   for (i=0; i > cityInfoArray.length; i++)

//  var researchCity = JSON.parse(localStorage.getItem(cityInfoArray[i]))
// console.log(researchCity)

// }})}
// )}
  

// }
// searchButtonClick(searchButton);


// function searchButtonClick (searchButton) {
//   $(cityInfoArray).each(function() {
//     let separateCities = parseInt(
//        $(this)
//          .attr('id')
//          .split('-')[1]
//     )
// })}


// searchButton.addEventListener(onclick, display(searchButton)) 

// function display(searchButton) {

// }