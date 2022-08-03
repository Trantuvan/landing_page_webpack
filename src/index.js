import generateJoke from "./generateJoke";
import "./scss/index.scss";

(() => {
  function component() {
    const element = document.createElement("div");
    element.classList.add("content");
    element.setAttribute("id", "content");
    return element;
  }

  document.body.appendChild(component());
})();
