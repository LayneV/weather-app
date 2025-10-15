export async function getData(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=S25UCW7RV2JD7DY2A88EUHLFF`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    //debug api response
    console.log(data);

    return data;
  } catch (error) {
    console.error("Error: ", error);
    return null;
  }
}
