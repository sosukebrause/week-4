console.log("helo");
window.localStorage.setItem("message", "this is to be shown");
window.localStorage.setItem("toDestroy", "destroy me");

var storeData = windows.localStorage.getItem("message");

console.log(storedData);

window.localStorage.removeItem("toDestroy");

var text = document.createElement("h1");

text.textContent = window.localStorage.getItem("message");
text.setAttribute("id", "noNeeded");
document.body.appendChild(text);

console.log(text);
