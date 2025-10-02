import "./styles.css";
import { getData } from "./api.js";

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
  const data = await getData(query);
  if (data === null) {
    weatherTemp.innerHTML = "Type in a correct city.";
    weatherLocation.innerHTML = "";
  } else {
    console.log(data);
    weatherLocation.innerHTML = `${data.resolvedAddress}`;
    weatherTemp.innerHTML = `Current temp: ${Math.round(data.currentConditions.temp)}°F`;
  }
  searchInput.value = "";
});
