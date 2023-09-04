const themeSelector = document.querySelector("#theme-select");
const styleSelector = document.querySelector("#style-select");
const body = document.querySelector("body");

themeSelector.addEventListener("change", () => {
  body.setAttribute("data-theme", themeSelector.value);
});

styleSelector.addEventListener("change", () => {
  body.setAttribute("data-style", styleSelector.value);
});
