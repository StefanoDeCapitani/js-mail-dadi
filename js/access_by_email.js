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

//Short version. Avoided multiple breaks.

const emails = [
  "console.log@virgilio.it",
  "mario.rossi@live.com",
  "alice.manzoni94@yahoo.it",
  "guido.mariani@gmail.com",
  "enrico.prestigiacomo@live.com",
  "viola.bellini00@gmail.com",
];

let message;
let emailRecognized = false;
let attemptsAvailable = 3;

while (!emailRecognized && attemptsAvailable > 0) {
  const emailEntry = prompt("Scrivi la tua mail per accedere.");
  attemptsAvailable--;

  if (emailEntry === null) {
    alert(
      "Accesso annullato. Per riprovare è necessario ricaricare la pagina."
    );
    break;
  } else {
    if (attemptsAvailable === 0) {
      message =
        "Email non riconosciuta.\nTentativi esauriti. Riprova più tardi.";
    } else {
      message = `Email non riconosciuta.\nHai ancora ${attemptsAvailable} tentativi.\n\nPremi "OK" per riprovare.`;
    }

    for (let i = 0; i < emails.length; i++) {
      if (emailEntry.toLowerCase() === emails[i]) {
        emailRecognized = true;
        message = "Accesso consentito. La tua mail è stata riconosciuta.";
        break;
      }
    }
  }

  alert(message);
}
