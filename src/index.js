// Weather app JS index

import "./style.css";
import { getWeatherData, processWeatherData } from "./weatherData.js";

console.log(processWeatherData(getWeatherData, "11201"));
