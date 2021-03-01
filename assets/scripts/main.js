var imageLeft = document.querySelector(".left-pic");
var imageRight = document.querySelector(".right-pic");

imageLeft.addEventListener("mouseover", function () {
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
});
