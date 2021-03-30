const imageLeft = document.querySelector(".left-pic");
const imageRight = document.querySelector(".right-pic");
const formButton = document.querySelector(".form-button");
const cancelButton = document.querySelector(".cancel");
const formContent = document.querySelector(".form-content");
const body = document.querySelector("body");
const wsDate = document.querySelector(".date");
const wsTime = document.querySelector(".time");
let urlParams = new URLSearchParams(window.location.search);
let firstName;
let lastName;
const nameInForm = document.querySelector(".name-in-form");
const elements = document.querySelectorAll(".hidden");
const windowHeight = window.innerHeight;
let namePerson = document.querySelector(".guest");
const type = document.querySelector(".type");

/*Start fade in animation on window load*/

window.onload = function () {
  body.classList.remove("hide");
};

/* Start pop in animation when user scrolls to the pics*/

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

/*Show the form and stop the typewriter when RSVP is clicked*/

formButton.addEventListener("click", function () {
  formContent.style.display = "block";
  typewriter.stop();
});

cancelButton.addEventListener("click", function () {
  formContent.style.display = "none";
  typewriter.start();
});

/*Fill in the guest's name and email adress from the URL. If it's empty, use Guest Guestersson*/
if (urlParams.has("firstname", "lastname")) {
  firstName = urlParams.get("firstname");
  lastName = urlParams.get("lastname");
} else {
  firstName = "Guest";
  lastName = "Guestersson";
  wsDate.textContent = "No invite?";
  wsTime.textContent = "No date...";
}

namePerson.textContent = firstName;
nameInForm.value = `${firstName} ${lastName}`;

/*Typewriter effect*/

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
