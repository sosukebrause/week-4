

var response = JSON.parse(window.localStorage.getItem("user"));
console.log(response);

var h1 = document.createElement("h1");

var textInput = document.querySelector("#textInput");

var userInput = document.querySelector("#userInput");
var btnSubmit = document.querySelector(#"btnSubmit");
var userText = "";

btnSubmit.addEventlistener("click", function (e) {
  e.preventDefault();
userText = userInput.value;
console.log(userText);
userInput.value = "";

window.localStorage.setItem("userText", userText);
})