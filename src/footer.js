import { red, blue } from "./button-styles";

// const top = "top";
const top = document.createElement("div");
top.innerText = "Top of Footer";
top.style = red;
// const bottom = "bottom";
const bottom = document.createElement("div");
bottom.innerText = "Bottom of Footer";
bottom.style = blue;
const footer = document.createElement("footer");
footer.appendChild(top);
footer.appendChild(bottom);

export { top, bottom, footer };
