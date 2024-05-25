// Write your javascript code here
const searchBtn = document.querySelector("#btn");
const inputSearch = document.querySelector("#inputsearch");
const myApiKey = "8dc8fd93fdb3624eb7112dce5bb65091";
const URL = "https://api.openweathermap.org/data/2.5/weather?q=";
const cityname = document.querySelector(".inputsearch");
const temparature = document.querySelector("#tempDegree");
const city = document.querySelector("#cityname");
const humdityPercentage = document.querySelector("#humidityPercentage");
const windSpeed = document.querySelector("#windSpeed");
const weatherImage = document.querySelector("#imgsrc");
let getWeatherData;
try {
  getWeatherData = async (cityName) => {
    const myResponse = await fetch(
      `${URL}${cityName}&appid=${myApiKey}&units=metric`
    );
    const data = await myResponse.json();
    console.log(data);
    temparature.innerText = `${Math.round(data.main.temp)}°C`;
    city.innerText = data.name;
    humdityPercentage.innerText = `${data.main.humidity}%`;
    windSpeed.innerText = `${Math.round(data.wind.speed * 3.6)}km/h`;
    if (data.weather[0].main == "Rain" || data.weather[0].main == "Haze") {
      weatherImage.src = "assets/images/rainy2.PNG"
    } else if (data.weather[0].main == "Clouds") {
      weatherImage.src = "assets/images/cloudy.png"
    }else{
      weatherImage.src="assets/images/sunny.png"
    return data;
  }}
}catch (err) {
  console.error(err);
}

searchBtn.addEventListener("click", (evt) => {
  evt.preventDefault();

  const city = inputSearch.value;
  if (city != "") {
    getWeatherData(city);
  } else {
    console.log(`City name can't be empty!`);
  }
});
