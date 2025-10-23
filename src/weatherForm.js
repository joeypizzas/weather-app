// Weather form view JS

import { getWeatherData, processWeatherData } from "./weatherData.js";
import { addDataToWeatherCard } from "./weatherCard.js";

export function initFormListeners() {
  const form = document.querySelector("form");
  const input = document.querySelector("input");
  const button = document.querySelector("button");
  const searchSVG = document.querySelector(".search-svg");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  input.addEventListener("mouseover", () => {
    input.classList.remove("input-color");
    input.classList.add("input-color-hover");
  });
  input.addEventListener("mouseout", () => {
    input.classList.remove("input-color-hover");
    input.classList.add("input-color");
  });
  input.addEventListener("blur", () => {
    input.setCustomValidity("");
    if (!input.checkValidity()) {
      input.setCustomValidity("Please enter a city or zip code.");
      input.reportValidity();
    } else {
      input.setCustomValidity("");
    }
  });
  input.addEventListener("input", () => {
    input.setCustomValidity("");
  });

  button.addEventListener("mouseover", () => {
    searchSVG.classList.remove("search-svg-color");
    searchSVG.classList.add("search-svg-color-hover");
  });
  button.addEventListener("mouseout", () => {
    searchSVG.classList.remove("search-svg-color-hover");
    searchSVG.classList.add("search-svg-color");
  });
  button.addEventListener("mousedown", () => {
    searchSVG.classList.remove("search-svg-color-hover");
    searchSVG.classList.add("search-svg-color-click");
  });
  button.addEventListener("mouseup", () => {
    searchSVG.classList.remove("search-svg-color-click");
    searchSVG.classList.add("search-svg-color-hover");
    if (form.checkValidity()) {
      addDataToWeatherCard(processWeatherData, getWeatherData, input.value);
      input.value = "";
    } else {
      form.reportValidity();
    }
  });
}
