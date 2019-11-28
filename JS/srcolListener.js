var elementsMove = document.querySelectorAll(".move");

function revealElement() {
  elementsMove.forEach(function(element) {
    let scrollPosition = window.innerHeight + window.scrollY;
    if (scrollPosition > element.offsetTop + 200) {
      element.classList.add("is-moved");
    }
  });
}

window.addEventListener("scroll", function() {
  revealElement();
});
