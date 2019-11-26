let inputs = document.querySelectorAll(".blur-verif");
let mail = document.querySelector(".regex-verif");
let form = document.querySelector("form");
let overlay = document.querySelector(".form-overlay");
let alertOk = document.querySelector(".alert-ok");
let alertWrong = document.querySelector(".alert-wrong");
let priceElement = document.querySelector(".prix");
let checkBoxes = document.querySelectorAll(".checkbox");
let colors = document.querySelectorAll(".color-sample");

let originalPrice = 99990;
let price = originalPrice;
let result = false;
let memo;

priceElement.innerHTML = price + " €";

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

function resetCheckboxes() {
  for (let checkbox of checkBoxes) {
    checkbox.checked = false;
    price = originalPrice;
    priceElement.innerHTML = price + " €";
  }
}

function calculPrice() {
  for (let checkbox of checkBoxes) {
    checkbox.addEventListener("click", function() {
      if (checkbox.checked) {
        price += Number(checkbox.getAttribute("data-price"));
        priceElement.innerHTML = price + " €";
      } else {
        price -= Number(checkbox.getAttribute("data-price"));
        priceElement.innerHTML = price + " €";
      }
    });
  }

  let olderPrice = 0;
  document.querySelector("select").addEventListener("blur", function() {
    price = price + Number(this.value) - olderPrice;
    priceElement.innerHTML = price + " €";
    olderPrice = Number(this.value);
  });
}

calculPrice();

inputs.forEach(function(elt) {
  elt.addEventListener("blur", function() {
    isValid(elt, elt.value);
  });
});

mail.addEventListener("blur", function() {
  isValid(mail, /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/i.test(mail.value));
});

for (let color of colors) {
  let parent = color.parentNode;
  color.addEventListener("click", function() {
    if (!memo) {
      parent.classList.add("is-selected");
      memo = parent;
    } else {
      memo.classList.remove("is-selected");
      parent.classList.add("is-selected");
      memo = parent;
    }
  });
}

form.addEventListener("submit", function(e) {
  e.preventDefault();

  if (result) {
    overlay.style.display = "flex";
    alertOk.style.display = "block";

    setTimeout(() => {
      overlay.style.display = "none";
      alertOk.style.display = "none";
    }, 3000);

    for (let i of inputs) {
      resetForm(i);
    }
    resetForm(mail);
    resetCheckboxes();
  } else if (!result) {
    overlay.style.display = "flex";
    alertWrong.style.display = "block";

    inputs.forEach(function(elt) {
      isValid(elt, elt.value);
    });

    isValid(mail, /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/i.test(mail.value));

    setTimeout(() => {
      overlay.style.display = "none";
      alertWrong.style.display = "none";
    }, 3000);
  }
});

console.log(result);
