var textInput = document.querySelector("#textInput");
var submitBtn = document.querySelector("#submitBtn");
var container = document.querySelector("#container");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(
    "#container2"
  ).innerHTML = `<h1>${textInput.value}<h1>`;
  // var h1 = document.createElement("h1");
  // var text = document.createTextNode(textInput.value);
  // h1.appendChild(text);
  // container.appendChild(h1);
});
