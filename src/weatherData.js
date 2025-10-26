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
  processedWeatherData.temperature = Math.round(
    unprocessedWeatherData.currentConditions.temp,
  );
  processedWeatherData.feelsLike = Math.round(
    unprocessedWeatherData.currentConditions.feelslike,
  );
  processedWeatherData.humidity = Math.round(
    unprocessedWeatherData.currentConditions.humidity,
  );
  processedWeatherData.uvIndex =
    unprocessedWeatherData.currentConditions.uvindex;
  processedWeatherData.description = unprocessedWeatherData.description;
  processedWeatherData.icon = unprocessedWeatherData.currentConditions.icon;

  const rawDate = unprocessedWeatherData.currentConditions.datetimeEpoch;
  const dateObj = new Date(rawDate * 1000);
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  processedWeatherData.date = formattedDate;

  return processedWeatherData;
}
