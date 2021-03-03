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
  typewriter.stop();
});

cancelButton.addEventListener("click", function () {
  formContent.style.display = "none";
  typewriter.start();
});

//var urlParams = new URLSearchParams(window.location.search);

/* if ("URLSearchParams" in window) {
  var urlParams = new URLSearchParams(window.location.search);
  var nameFromUrl = urlParams.get("name");
  var cityFromUrl = urlParams.get("city");
  urlParams.set("name", nameFromUrl);
  urlParams.set("city", cityFromUrl);
  var newRelativePathQuery =
    window.location.pathname + "?" + urlParams.toString();
  history.pushState(null, "", newRelativePathQuery);
}

console.log(urlParams.get("name"));
console.log(urlParams.get("city")); */

//const user = document.querySelector(".name");
//user.innerHTML = name;

const type = document.querySelector(".type");

var typewriter = new Typewriter(type, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(500)
  .typeString("Click to")
  .pauseFor(1500)
  .deleteChars(8)
  .start();
