import "./styles.css";
import { getData } from "./api.js";
import { Weather } from "./weather.js";

const searchBtn = document.getElementById("search-button");
const searchInput = document.getElementById("city-input");
const weatherTemp = document.getElementById("temp");
const weatherLocation = document.getElementById("location");

searchBtn.addEventListener("click", async () => {
  const query = searchInput.value.trim();
  if (query === "") {
    alert("Please enter a city");
    return null;
  }
  weatherLocation.innerHTML = "Loading...";
  weatherTemp.innerHTML = "";
  const data = await getData(query);
  if (data === null) {
    weatherTemp.innerHTML = "Type in a correct city.";
    weatherLocation.innerHTML = "";
  } else {
    const currentWeather = new Weather(data);
    console.log(currentWeather);
    weatherLocation.innerHTML = `${currentWeather.location}`;
    weatherTemp.innerHTML = `Current temp: ${currentWeather.temperature}°F`;
  }
  searchInput.value = "";
});
