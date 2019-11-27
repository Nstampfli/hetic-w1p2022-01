let articles = document.querySelectorAll(".article-here");
let next = document.querySelector(".suiv");
let prev = document.querySelector(".prec");
let index = 0;

console.log(articles);

let hideNextPrev = function(index) {
  next.classList.toggle("is-hidden", index === articles.length - 1);
  prev.classList.toggle("is-hidden", index === 0);
};

let jump = function(to) {
  articles[index].classList.add("is-hidden");
  index = to;
  if (index > articles.length - 1) {
    index = articles.length - 1;
  } else if (index < 0) {
    index = 0;
  }
  articles[index].classList.remove("is-hidden");
  hideNextPrev(index);
};

next.addEventListener("click", function() {
  jump(index + 1);
});

prev.addEventListener("click", function() {
  jump(index - 1);
});

hideNextPrev(0);
