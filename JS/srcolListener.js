var elementsMove = document.querySelectorAll(".move");

function revealElement() {
  elementsMove.forEach(function(element) {
    let scrollPosition = window.innerHeight + window.scrollY;
    if (scrollPosition > element.offsetTop + 150) {
      element.classList.add("is-moved");
    }
  });
}

window.addEventListener("scroll", function() {
  revealElement();
});

let slogan = document.querySelector(".slogan");

window.addEventListener("load", function() {
  slogan.classList.add("is-grown");
});
