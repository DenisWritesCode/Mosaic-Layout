const ul = document.querySelectorAll(".colors a");
const root = document.querySelector(":root");

ul.forEach((ul) => {
  ul.addEventListener("click", (e) => {
      e.preventDefault();

      let element = getComputedStyle(e.target); // Because we do our styling outside in a separate CSS file.
      let color = element.backgroundColor;

      root.style.setProperty("--theme-color", color);
  })  
});