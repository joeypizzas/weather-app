// Weather data js

export async function getWeatherData(location) {
  try {
    const visualCrossing = "AET6TNBALUQGTXKDVRPLWF9E8";
    const visualCrossingURL =
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
      location +
      "?key=" +
      visualCrossing;
    const rawWeatherData = await fetch(visualCrossingURL);
    const weatherData = await rawWeatherData.json();
    return weatherData;
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
}
