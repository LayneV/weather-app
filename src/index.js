import "./styles.css";
import { getData } from "./api.js";

const searchBtn = document.getElementById("search-button");
const searchInput = document.getElementById("city-input");
const weatherTemp = document.getElementById("temp");

searchBtn.addEventListener("click", async () => {
  const query = searchInput.value.trim();
  if (query === "") {
    alert("Please enter a city");
    return null;
  }

  const data = await getData(query);
  if (data === null) {
    weatherTemp.innerHTML = "Type in a correct city.";
  } else {
    weatherTemp.innerHTML = `Current temp: ${Math.round(data.currentConditions.temp)}°F`;
  }
  searchInput.value = "";
});
