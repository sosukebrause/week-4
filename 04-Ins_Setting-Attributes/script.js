var pTags = document.querySelectorAll("p");
var divTags = document.querySelectorAll("div");
var aTags = document.querySelectorAll("a");
var imgEl = document.querySelectorAll("img");
var changeP = document.querySelector("#change2");

console.log(pTags);

pTags[0].setAttribute("style", "font-size: 65px;");
changeP.setAttribute("style", "color:blue; border:2px solid black;");
aTags[0].setAttribute("href", "https://github.com");
imgEl[0].setAttribute("src", "images/image_1.jpg");
imgEl[0].setAttribute("style", "width:500px; height:200px;");
imgEl[1].setAttribute("src," "https://cdn.pixabay.com/photo/2015/11/07/12/00/city-1031706_1280.jpg")

for (var i = 0; i < divTags.length; i++) {
  divTags[i].setAttribute("style", "text-decoration:underline; color:red;");
}
