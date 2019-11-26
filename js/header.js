let element = document.getElementById("menu");
let opener = document.getElementById("open-menu");

opener.addEventListener("click", function() {
  element.classList.toggle("is-open");
});
