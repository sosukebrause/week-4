var toggleDisplay = document.querySelector("#toggleDisplay");
var toggleBtn = document.querySelector("#toggleBtn");

var toggleStatus;

var toggleBtn = document.querySelector("#toggleBtn");
var toggleDisplay = document.querySelector("#toggleDisplay");

var toggleStatus;
toggleBtn.addEventListener("click", function () {
  toggleStatus = toggleDisplay.getAttribute("class");
  if (toggleStatus === "toggle toggledFalse") {
    toggleDisplay.setAttribute("class", "toggle toggledTrue");
    document.body.setAttribute("class", "darkmode");
  } else {
    toggleDisplay.setAttribute("class", "toggledFalse");
    document.body.setAttribute("class", "");
    // console.log("We must change to light mode");
  }
});
toggleBtn.addEventListener("click", function () {
  toggleDisplay.setAttribute("class", "darkMode");
});

//read class of gthe toggleDisplay
//set toggleStatus to toggleDisplay class
//set conditional
//if class is toggleFalse it should...
//set the toglle status to the class of the toggle display
