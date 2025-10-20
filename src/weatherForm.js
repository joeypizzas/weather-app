// Weather form view JS

export function initFormListeners() {
  const input = document.querySelector("input");
  const button = document.querySelector("button");
  const searchSVG = document.querySelector(".search-svg");

  input.addEventListener("mouseover", () => {
    input.classList.remove("input-color");
    input.classList.add("input-color-hover");
  });
  input.addEventListener("mouseout", () => {
    input.classList.remove("input-color-hover");
    input.classList.add("input-color");
  });

  button.addEventListener("mouseover", () => {
    searchSVG.classList.remove("search-svg-color");
    searchSVG.classList.add("search-svg-color-hover");
  });
  button.addEventListener("mouseout", () => {
    searchSVG.classList.remove("search-svg-color-hover");
    searchSVG.classList.add("search-svg-color");
  });
}
