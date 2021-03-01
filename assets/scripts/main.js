const imageLeft = document.querySelector(".left-pic");
const imageRight = document.querySelector(".right-pic");
const formButton = document.querySelector(".form-button");
const cancelButton = document.querySelector(".cancel");
const formContent = document.querySelector(".form-content");

/* imageLeft.addEventListener("mouseover", function () {
  imageLeft.style.backgroundImage = "url(/assets/images/paskcoffee.jfif)";
});
imageLeft.addEventListener("mouseout", function () {
  imageLeft.style.backgroundImage = "url(/assets/images/coffecircle.jpg)";
});

imageRight.addEventListener("mouseover", function () {
  imageRight.style.backgroundImage = "url(/assets/images/him.jpg)";
});
imageRight.addEventListener("mouseout", function () {
  imageRight.style.backgroundImage = "url(/assets/images/coffee.jfif)";
}); */

formButton.addEventListener("click", function () {
  formContent.style.display = "block";
});

cancelButton.addEventListener("click", function () {
  formContent.style.display = "none";
});
