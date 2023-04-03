/*var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle(".large-container");
}*/

let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let srcBtn = document.querySelector(".bx-search")

btn.onclick = function () {
  sidebar.classList.toggle("active");
};
