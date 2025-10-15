import "./styles.css";
import { getData } from "./api.js";
import { Weather } from "./weather.js";

const searchBtn = document.getElementById("search-button");
const searchInput = document.getElementById("city-input");
const weatherTemp = document.getElementById("temp");
const weatherLocation = document.getElementById("location");
const weatherConditions = document.getElementById("conditions");
const weatherIcon = document.getElementById("weather-icon");

searchBtn.addEventListener("click", async () => {
  const query = searchInput.value.trim();
  if (query === "") {
    alert("Please enter a city");
    return null;
  }
  weatherLocation.innerHTML = "Loading...";
  weatherTemp.innerHTML = "";
  weatherIcon.src = "";

  const data = await getData(query);
  if (data === null) {
    weatherTemp.innerHTML = "Type in a correct city.";
    weatherLocation.innerHTML = "";
    weatherConditions.innerHTML = "";
  } else {
    const currentWeather = new Weather(data);
    console.log(currentWeather);
    weatherLocation.innerHTML = `${currentWeather.location}`;
    weatherTemp.innerHTML = `Current temp: ${currentWeather.temperature}°F`;
    weatherConditions.innerHTML = currentWeather.conditions;
    weatherIcon.src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${currentWeather.icon}.svg`;
  }
  searchInput.value = "";
});
