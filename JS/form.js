let inputs = document.querySelectorAll(".blur-verif");
let mail = document.querySelector(".regex-verif");
let form = document.querySelector("form");
let overlay = document.querySelector(".form-overlay");
let alertOk = document.querySelector(".alert-ok");
let alertWrong = document.querySelector(".alert-wrong");
let result = false;

let isValid = function(element, condition) {
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
};

inputs.forEach(function(elt) {
  elt.addEventListener("blur", function() {
    isValid(elt, elt.value);
  });
});

mail.addEventListener("blur", function() {
  isValid(mail, /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/i.test(mail.value));
});

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

    document.querySelector("textarea").value = "";
  } else {
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
