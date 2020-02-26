import nav from "./nav";
import { footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import css from "./footer.css";
import buttonStyle from "./button.css";

const button = makeButton("Yay! A Button!");
button.style = makeColorStyle("blue");
document.body.appendChild(button);
document.body.appendChild(footer);
