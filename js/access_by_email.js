const emails = [
  "console.log@virgilio.it",
  "mario.rossi@live.com",
  "alice.manzoni94@yahoo.it",
  "guido.mariani@gmail.com",
  "enrico.prestigiacomo@live.com",
  "viola.bellini00@gmail.com",
];
let message = "Email non riconosciuta, accesso negato";

const emailEntry = prompt("Scrivi la tua mail per accedere.");
if (emailEntry) {
  emailRiconosciuta = emails.includes(emailEntry.toLowerCase());

  if (emailRiconosciuta) {
    message = "Accesso consentito. La tua mail è stata riconosciuta.";
  }

  alert(message);
} else {
  alert("Accesso annullato. Per riprovare è necessario ricaricare la pagina.");
}
