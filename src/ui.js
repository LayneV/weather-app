const weatherTemp = document.getElementById("temp");
const weatherLocation = document.getElementById("location");
const weatherDisplay = document.getElementById("weather-display");
const weatherConditions = document.getElementById("conditions");
const weatherIcon = document.getElementById("weather-icon");
const loader = document.querySelector(".loader");
const weeklyForecastContainer = document.getElementById(
  "weekly-forecast-container"
);

export const statusDisplay = document.getElementById("status-display");
export const statusText = statusDisplay.querySelector(".status-text");
export const searchBtn = document.getElementById("search-button");
export const searchInput = document.getElementById("city-input");
export const unitToggleBtn = document.getElementById("unit-toggle-btn");

export function renderWeather(weatherData, currentUnit) {
  statusDisplay.classList.remove("visible");
  loader.classList.add("hidden");
  statusText.textContent = "";
  weatherLocation.textContent = weatherData.location;
  weatherConditions.textContent = weatherData.conditions;
  weatherIcon.src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${weatherData.icon}.svg`;

  if (currentUnit === "F") {
    weatherTemp.textContent = `${weatherData.temperature}°F`;
    unitToggleBtn.textContent = "Display in °C";
  } else {
    weatherTemp.textContent = `${weatherData.temperatureC}°C`;
    unitToggleBtn.textContent = "Display in °F";
  }
  weatherDisplay.classList.remove("hidden");
}

export function displayLoading() {
  statusDisplay.classList.add("visible");
  loader.classList.remove("hidden");
  statusText.textContent = "";
  weatherDisplay.classList.add("hidden");
  weeklyForecastContainer.classList.add("hidden");
}

export function displayError() {
  statusDisplay.classList.add("visible");
  loader.classList.add("hidden");
  statusText.textContent = "❌City not found. Please try again.";
  weatherDisplay.classList.add("hidden");
  weeklyForecastContainer.classList.add("hidden");
}

export function renderWeeklyForecast(weeklyWeatherData, currentUnit) {
  weeklyForecastContainer.innerHTML = "";
  weeklyWeatherData.forEach((day) => {
    let dailyWeatherCard = document.createElement("div");
    dailyWeatherCard.classList.add("weekly-forecast");
    let dayName = document.createElement("p");
    let img = document.createElement("img");
    let temps = document.createElement("p");
    let precip = document.createElement("p");
    precip.classList.add("forecast-precip");

    dayName.innerHTML = day.dayName;
    img.src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${day.icon}.svg`;
    if (currentUnit === "F") {
      temps.innerHTML = `High: ${day.maxTemp}°F Low: ${day.minTemp}°F`;
    } else {
      temps.innerHTML = `High: ${day.maxTempC}°C Low: ${day.minTempC}°C`;
    }
    precip.textContent = `☔️ ${day.precipChance}%`;

    dailyWeatherCard.appendChild(dayName);
    dailyWeatherCard.appendChild(img);
    dailyWeatherCard.appendChild(temps);
    dailyWeatherCard.appendChild(precip);

    weeklyForecastContainer.appendChild(dailyWeatherCard);
    weeklyForecastContainer.classList.remove("hidden");
  });
}

export function updateTheme(weatherData) {
  document.body.classList.remove(
    "theme-clear-day",
    "theme-clear-night",
    "theme-cloudy",
    "theme-rain",
    "theme-snow"
  );
  if (weatherData.icon.includes("rain")) {
    document.body.classList.add("theme-rain");
  } else if (weatherData.icon.includes("cloudy")) {
    document.body.classList.add("theme-cloudy");
  } else if (weatherData.icon.includes("night")) {
    document.body.classList.add("theme-clear-night");
  } else if (weatherData.icon.includes("snow")) {
    document.body.classList.add("theme-snow");
  } else {
    document.body.classList.add("theme-clear-day");
  }
}
