(() => {
  function component() {
    const element = document.createElement("div");
    element.classList.add("content");
    element.setAttribute("id", "content");
    return element;
  }

  document.body.appendChild(component());
})();
