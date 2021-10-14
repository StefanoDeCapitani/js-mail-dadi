/* const emails = [
  "console.log@virgilio.it",
  "mario.rossi@live.com",
  "alice.manzoni94@yahoo.it",
  "guido.mariani@gmail.com",
  "enrico.prestigiacomo@live.com",
  "viola.bellini00@gmail.com",
];
const attemptsAvailable = 3;
let message;
let emailRecognized = false;

 for (let j = 0; j < attemptsAvailable; j++) {
  let attempt = j + 1;
  const emailEntry = prompt("Scrivi la tua mail per accedere.");

   if (emailEntry) {
    for (let i = 0; i < emails.length; i++) {
      if (emailEntry.toLowerCase() === emails[i]) {
        emailRecognized = true;
        break;
      }
    }

    if (emailRecognized) {
      message = "Accesso consentito. La tua mail è stata riconosciuta.";
      break;
    }

    if (attempt === attemptsAvailable) {
      message =
        "Email non riconosciuta.\nTentativi esauriti. Riprova più tardi.";
      break;
    }
    message = `Email non riconosciuta.\nTentativo di accesso ${attempt}/${attemptsAvailable}.\n\nPremi "OK" per riprovare.`;
    alert(message);

  } else {

    message =
      "Accesso annullato. Per riprovare è necessario ricaricare la pagina.";
    break;

  }
}

alert(message); */

//Bonus version with input field

const emails = [
  "console.log@virgilio.it",
  "mario.rossi@live.com",
  "alice.manzoni94@yahoo.it",
  "guido.mariani@gmail.com",
  "enrico.prestigiacomo@live.com",
  "viola.bellini00@gmail.com",
];

const form = document.querySelector("form");
const inputEmail = document.querySelector("#email-input");
const invalidFeedback = document.querySelector(".invalid-feedback");
const submitBtn = document.getElementById("submit-btn");
let attemptsAvailable = 3;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let message;
  const emailEntry = inputEmail.value;
  let emailRecognised = false;
  attemptsAvailable--;

  if (attemptsAvailable === 0) {
    message = "Email non riconosciuta. Tentativi esauriti. Riprova più tardi.";
    submitBtn.disabled = true;
  } else {
    let pluraleOSingolare = attemptsAvailable === 1 ? "o" : "i";
    message = `Email non riconosciuta. Hai ancora ${attemptsAvailable} tentativ${pluraleOSingolare}.`;
  }

  for (let i = 0; i < emails.length; i++) {
    if (emailEntry.toLowerCase() === emails[i]) {
      emailRecognised = true;
      window.location.href = "../success.html";
    }
  }
  if (!emailRecognised) {
    inputEmail.classList.add("is-invalid");
    invalidFeedback.textContent = message;
  }
});

inputEmail.addEventListener("click", function () {
  inputEmail.classList.remove("is-invalid");
});
