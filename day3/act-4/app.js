var todoText = document.querySelector("#todoText");
var btnSubmit = document.querySelector("#btnSubmit");

// var todoArray = JSON.parse(window.localStorage.getItem("todos"));
// var todoArray = [];
var todoArray = JSON.parse(window.localStorage.getItem("todos")) || [];

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  todoArray.push(todoText.value);
  todoText.value = "";
  window.localStorage.setItem("todos", JSON.stringify(todoArray));
  console.log(typeof todoArray);
});
function renderTodos() {
  var todos = window.localStorage.getItem("todos");

  for (var i = 0; i < todos.length; i++) {
    console.log(todos[i]);
    var todo = document.createElement("h1");
    todoH1.textContent = todos[i];
    todoH1.setAttribute("data-id", i);

    console.log(todoH1);
    todoH1.addEventListener("click", function () {
      var todoID = parseInt(this.getAttribute("data-id"));
      console.log(todoID);

      todoArray.splice(todoID, 1);
      console.log(todoArray);
    });
  }
}

var response = JSON.parse(window.localStorage.getItem("todos"));

// we use JSON.stringify to convert the {} object or [] array to string (edited)

// 1:23
// while we use JSON.parse to convert the string back to array or object
// 1:24
// from your example JSON.stringify({
//    username: "sb8989",
//    password: "898989",
//  }) , it means converting the object to string
