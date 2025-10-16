import "./styles.css";
import { getData } from "./api.js";
import { Weather } from "./weather.js";
import * as ui from "./ui.js";

let currentWeather = null;
let currentUnit = "F";

ui.searchBtn.addEventListener("click", () => {
  const query = ui.searchInput.value.trim();
  if (query) {
    fetchAndRenderWeather(query);
  }
});

ui.unitToggleBtn.addEventListener("click", () => {
  if (currentWeather != null) {
    if (currentUnit === "F") {
      currentUnit = "C";
    } else {
      currentUnit = "F";
    }
    ui.renderWeather(currentWeather, currentUnit);
    ui.renderWeeklyForecast(currentWeather.forecast, currentUnit);
  }
});

async function fetchAndRenderWeather(location) {
  ui.displayLoading();

  const data = await getData(location);

  if (data === null) {
    ui.displayError();
  } else {
    currentWeather = new Weather(data);
    localStorage.setItem("lastSearchedCity", currentWeather.location);
    ui.renderWeather(currentWeather, currentUnit);
    ui.renderWeeklyForecast(currentWeather.forecast, currentUnit);
    ui.updateTheme(currentWeather);
  }
  ui.searchInput.value = "";
}

function getWeatherForCurrentLocation() {
  ui.statusText.textContent = "Getting your location...";
  ui.statusDisplay.classList.add("visible");

  const success = (position) => {
    const { latitude, longitude } = position.coords;
    const coordinates = `${latitude},${longitude}`;
    fetchAndRenderWeather(coordinates);
  };

  const error = () => {
    ui.statusText.textContent =
      "Unable to retrieve your location. Please search for a city manually.";
  };

  navigator.geolocation.getCurrentPosition(success, error);
}

function loadInitialWeather() {
  let savedCity = localStorage.getItem("lastSearchedCity");
  if (savedCity) {
    fetchAndRenderWeather(savedCity);
  }
}

function initializeApp() {
  const savedCity = localStorage.getItem("lastSearchedCity");

  if (savedCity) {
    fetchAndRenderWeather(savedCity);
  } else {
    getWeatherForCurrentLocation();
  }
}

initializeApp();
