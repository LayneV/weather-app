import "./styles.css";
import { getData } from "./api.js";
import { Weather } from "./weather.js";
import * as ui from "./ui.js";

let currentWeather = null;
let currentUnit = "F";

ui.searchBtn.addEventListener("click", async () => {
  const query = ui.searchInput.value.trim();
  if (query === "") {
    alert("Please enter a city");
    return;
  }

  ui.displayLoading();

  const data = await getData(query);

  if (data === null) {
    ui.displayError();
  } else {
    currentWeather = new Weather(data);
    ui.renderWeather(currentWeather, currentUnit);
  }
  ui.searchInput.value = "";
});

ui.unitToggleBtn.addEventListener("click", () => {
  if (currentWeather != null) {
    if (currentUnit === "F") {
      currentUnit = "C";
    } else {
      currentUnit = "F";
    }
    ui.renderWeather(currentWeather, currentUnit);
  }
});
