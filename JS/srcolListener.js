let elementsMove = document.querySelectorAll(".move");
let upDescription = document.querySelector(".description");
let headerWrapper = document.querySelector(".header-wrapper");
let upperButton = document.querySelector(".buy-button-header");
let formElement = document.querySelector(".form-section");
let menuElt = document.querySelector(".menu-list");
let crossButton = document.querySelector(".open-menu");
let menuOpen = document.querySelector(".menu");

function revealElement() {
  elementsMove.forEach(function(element) {
    let scrollPosition = window.innerHeight + window.scrollY;
    if (scrollPosition > element.offsetTop + 150) {
      element.classList.add("is-moved");
    }
  });
}

function revealUpperButton() {
  upperButton.classList.toggle(
    "pop",
    window.scrollY > window.innerHeight + 20 &&
      window.scrollY < formElement.offsetTop
  );

  menuElt.classList.toggle(
    "is-hidden",
    window.scrollY > window.innerHeight + 10 &&
      window.scrollY < formElement.offsetTop
  );
}

crossButton.addEventListener("click", function() {
  if (menuOpen.classList.contains("is-open")) {
    upperButton.classList.remove("pop");
  } else {
    upperButton.classList.add("pop");
  }
});

window.addEventListener("scroll", function() {
  revealElement();
  revealUpperButton();
});

let slogan = document.querySelector(".slogan");

window.addEventListener("load", function() {
  slogan.classList.add("is-grown");
});
