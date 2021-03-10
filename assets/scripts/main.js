const imageLeft = document.querySelector(".left-pic");
const imageRight = document.querySelector(".right-pic");
const formButton = document.querySelector(".form-button");
const cancelButton = document.querySelector(".cancel");
const formContent = document.querySelector(".form-content");
let urlParams = new URLSearchParams(window.location.search);
let name;
const nameInForm = document.querySelector(".name-in-form");
const elements = document.querySelectorAll(".hidden");
const windowHeight = window.innerHeight;

function checkPosition() {
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var positionFromTop = elements[i].getBoundingClientRect().top;

    if (positionFromTop - windowHeight <= 0) {
      element.classList.add("fade-in-pop");
      element.classList.remove("hidden");
    }
  }
}

window.addEventListener("scroll", checkPosition);

checkPosition();

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

if (urlParams.has("name")) {
  name = urlParams.get("name");
} else {
  name = "";
}

let namePerson = document.querySelector(".guest");
namePerson.textContent = name;
nameInForm.value = name;

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
