async function getData() {
  try {
    const response = await fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=S25UCW7RV2JD7DY2A88EUHLFF"
    );
    const data = await response.json();
    console.log(`Current temp: ${data.currentConditions.temp}°F`);
  } catch (error) {
    console.error("Error: ", error);
  }
}

getData();
