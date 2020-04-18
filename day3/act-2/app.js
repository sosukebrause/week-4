// window.localStorage.setItem(
//   "username",
//   JSON.stringify({
//     username: "sb8989",
//     password: "898989",
//   })
// );
// var response = JSON.parse(window.localStorage.getItem(username));
// console.log(response.username);

// text.textContent = window.localStorage.getItem(response.username);
// var text = document.createElement("h1");
// document.body.appendChild(text);

window.localStorage.setItem(
  "user",
  JSON.stringify({
    username: "sb8989",
    password: "898989",
  })
);
var response = JSON.parse(window.localStorage.getItem("user"));
console.log(response.username);

var text = document.createElement("h1");
text.textContent = response.username;

document.body.appendChild(text);
