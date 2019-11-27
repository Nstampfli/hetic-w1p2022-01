let element = document.getElementById("menu");
let opener = document.querySelectorAll(".open-close");

console.log(opener);

for (let open of opener) {
  open.addEventListener("click", function() {
    element.classList.toggle("is-open");
  });
}
