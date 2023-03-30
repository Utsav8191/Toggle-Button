import "./styles.css";

var innerball = document.getElementById("toggle-ball");
var box = document.getElementById("app");
var text = document.getElementsByTagName("h2");
var count = 1;
innerball.onclick = function () {
  innerball.classList.toggle("active");
  count++;
  if (count % 2 === 0) {
    document.body.style.backgroundColor = "black";
    box.style.backgroundColor = "white";
    text[0].style.color = "white";
    text[0].innerHTML = "Welcome To Dark Mode!";
  } else {
    document.body.style.backgroundColor = "white";
    text[0].style.color = "black";
    text[0].innerHTML = "Click on the Toggle Button";
  }
};
