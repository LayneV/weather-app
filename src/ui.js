const weatherTemp = document.getElementById("temp");
const weatherLocation = document.getElementById("location");
const weatherConditions = document.getElementById("conditions");
const weatherIcon = document.getElementById("weather-icon");

export const searchBtn = document.getElementById("search-button");
export const searchInput = document.getElementById("city-input");
export const unitToggleBtn = document.getElementById("unit-toggle-btn");

export function renderWeather(weatherData, currentUnit) {
  weatherLocation.textContent = weatherData.location;
  weatherConditions.textContent = weatherData.conditions;
  weatherIcon.src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${weatherData.icon}.svg`;

  if (currentUnit === "F") {
    weatherTemp.textContent = `Current temp: ${weatherData.temperature}°F`;
    unitToggleBtn.textContent = "Display in °C";
  } else {
    weatherTemp.textContent = `Current temp: ${weatherData.temperatureC}°C`;
    unitToggleBtn.textContent = "Display in °F";
  }
}

export function displayLoading() {
  weatherLocation.textContent = "Loading...";
  weatherTemp.textContent = "";
  weatherConditions.textContent = "";
  weatherIcon.src = "";
}

export function displayError() {
  weatherLocation.textContent = "";
  weatherTemp.textContent = "Type in a correct city.";
  weatherConditions.textContent = "";
  weatherIcon.src = "";
}
