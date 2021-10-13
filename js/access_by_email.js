const emails = [
  "console.log@virgilio.it",
  "mario.rossi@live.com",
  "alice.manzoni94@yahoo.it",
  "guido.mariani@gmail.com",
  "enrico.prestigiacomo@live.com",
  "viola.bellini00@gmail.com",
];
const attemptsAvailable = 3;

for (let j = 0; j < attemptsAvailable; j++) {
  let attempt = j + 1;
  let message = `Email non riconosciuta, tentativo di accesso ${attempt}/${attemptsAvailable}\nPremi "OK" per riprovare.`;

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
      message = "Tentativi esauriti. Riprova più tardi.";
    }

    alert(message);
  } else {
    alert(
      "Accesso annullato. Per riprovare è necessario ricaricare la pagina."
    );
    break;
  }
}
