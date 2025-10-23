// Weather card JS

export async function addDataToWeatherCard(
  weatherDataFunction,
  otherWeatherDataFunction,
  location,
) {
  const weatherData = await weatherDataFunction(
    otherWeatherDataFunction,
    location,
  );

  const cardTitle = document.querySelector("#card-title");
  const img = document.querySelector("img");
  const temp = document.querySelector("#temp");
  const conditions = document.querySelector("#conditions");
  const feelsLike = document.querySelector("#feels-like");
  const description = document.querySelector("#description");
  const humidity = document.querySelector("#humidity");
  const uv = document.querySelector("#uv");

  cardTitle.textContent = weatherData.location;
  temp.textContent = `${weatherData.temperature}°F`;
  conditions.textContent = weatherData.conditions;
  feelsLike.textContent = `Feels like: ${weatherData.feelsLike}°F`;
  description.textContent = weatherData.description;
  humidity.textContent = `Humidity: ${weatherData.humidity}%`;
  uv.textContent = `UV index: ${weatherData.uvIndex} of 11`;

  const iconModule = await import(`./icons/${weatherData.icon}.svg`);
  const iconURL = iconModule.default;
  img.innerHTML = `<img src="${iconURL}" alt="${weatherData.icon} icon" />`;
}
