const emails = [
  "console.log@virgilio.it",
  "mario.rossi@live.com",
  "alice.manzoni94@yahoo.it",
  "guido.mariani@gmail.com",
  "enrico.prestigiacomo@live.com",
  "viola.bellini00@gmail.com",
];
const attemptsAvailable = 3;
let message;

for (let j = 0; j < attemptsAvailable; j++) {
  let attempt = j + 1;
  const emailEntry = prompt("Scrivi la tua mail per accedere.");

  let emailRecognized = false;
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

    alert(
      `Email non riconosciuta.\nTentativo di accesso ${attempt}/${attemptsAvailable}.\n\nPremi "OK" per riprovare.`
    );
  } else {
    message =
      "Accesso annullato. Per riprovare è necessario ricaricare la pagina.";
    break;
  }
}

alert(message);
