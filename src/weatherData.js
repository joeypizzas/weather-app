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

export async function processWeatherData(weatherData, location) {
  const unprocessedWeatherData = await weatherData(location);

  const processedWeatherData = {};
  processedWeatherData.location = unprocessedWeatherData.resolvedAddress;
  processedWeatherData.conditions =
    unprocessedWeatherData.currentConditions.conditions;
  processedWeatherData.temperature =
    unprocessedWeatherData.currentConditions.temp;
  processedWeatherData.feelsLike =
    unprocessedWeatherData.currentConditions.feelslike;
  processedWeatherData.humidity =
    unprocessedWeatherData.currentConditions.humidity;
  processedWeatherData.uvIndex =
    unprocessedWeatherData.currentConditions.uvindex;
  processedWeatherData.windspeed =
    unprocessedWeatherData.currentConditions.windspeed;
  processedWeatherData.description = unprocessedWeatherData.description;
  processedWeatherData.icon = unprocessedWeatherData.currentConditions.icon;

  return processedWeatherData;
}
