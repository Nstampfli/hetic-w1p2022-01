let mail = document.querySelector(".email");
let form = document.querySelector("form");
let overlay = document.querySelector(".form-overlay");
let alertOk = document.querySelector(".alert-ok");
let alertWrong = document.querySelector(".alert-wrong");
let priceElement = document.querySelector(".prix");
let colors = document.querySelectorAll(".color-sample");
let colorSelected = document.querySelectorAll(".color-li");
let boatColors = document.querySelectorAll(".boat-color");
let bigBoatsColors = document.querySelectorAll(".boat-color-big");
let moteurs = document.querySelectorAll(".puissance-moteur");
let button = document.querySelector(".boutton-commande");

let originalPrice = 149990;
let price = originalPrice;
let priceAffiche;
let result = false;
let memo = document.querySelector(".is-selected");
let prevMoteur = document.querySelector(".moteur-selected");
let colorChoice = false;

function priceToString(x) {
  let priceString = x.toString();
  let pricetab = priceString.split("");
  pricetab.splice(-3, 0, " ");
  priceAffiche = pricetab.join("");
}
priceToString(price);

priceElement.innerHTML = priceAffiche + " €";

function isValid(element, condition) {
  var parent = element.parentNode;
  if (condition) {
    parent.classList.remove("is-not-valid");
    parent.classList.add("is-valid");
    result = true;
  } else {
    parent.classList.remove("is-valid");
    parent.classList.add("is-not-valid");
    result = false;
  }
}

function resetForm(element) {
  element.value = "";
  element.parentNode.classList.remove("is-valid");
}

mail.addEventListener("blur", function() {
  isValid(mail, /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/i.test(mail.value));
});

for (let moteur of moteurs) {
  moteur.addEventListener("click", function() {
    prevMoteur.classList.remove("moteur-selected");
    moteur.classList.add("moteur-selected");
    prevMoteur = moteur;

    let newPrice = Number(moteur.getAttribute("data-price")) + price;
    priceToString(newPrice);

    priceElement.innerHTML = priceAffiche + " €";
  });
}

for (let i = 0; i < colors.length; i++) {
  let parent = colors[i].parentNode;
  colors[i].addEventListener("click", function() {
    memo.classList.remove("is-selected");
    parent.classList.add("is-selected");
    memo = parent;
    for (let j = 0; j < boatColors.length; j++) {
      boatColors[j].classList.toggle(
        "visible",
        colorSelected[j].classList.contains("is-selected")
      );
    }
  });
}

for (let i = 0; i < colors.length; i++) {
  let parent = colors[i].parentNode;
  colors[i].addEventListener("click", function() {
    memo.classList.remove("is-selected");
    parent.classList.add("is-selected");
    memo = parent;
    for (let j = 0; j < bigBoatsColors.length; j++) {
      bigBoatsColors[j].classList.toggle(
        "visible",
        colorSelected[j].classList.contains("is-selected")
      );
    }
  });
}

button.addEventListener("click", function(e) {
  e.preventDefault();
  if (result) {
    overlay.style.display = "flex";
    alertOk.style.display = "block";

    setTimeout(() => {
      overlay.style.display = "none";
      alertOk.style.display = "none";
    }, 3000);

    resetForm(mail);
  } else if (!result) {
    overlay.style.display = "flex";
    alertWrong.style.display = "block";

    isValid(mail, /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/i.test(mail.value));

    setTimeout(() => {
      overlay.style.display = "none";
      alertWrong.style.display = "none";
    }, 3000);
  }
});
