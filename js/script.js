// Raccolta dei dati
const userKm = parseInt(prompt("Inserisci i km che vuoi percorrere"));
const userAge = parseInt(prompt("inserire la sua età"));
console.log(userKm, userAge);

// Logica del programma

// Calcolo costo biglietto
const ticketPriceKm = 0.21;
const ticketPriceTotal = ticketPriceKm * userKm;
const ticketRounded = Math.round((ticketPriceTotal + Number.EPSILON ) * 100) / 100;
console.log(ticketRounded)

// Determino l'età dell'utente e la propria scontistica
let finalPriceRounded = "";
let message = "";

if (userAge > 65) {
  const discount = (ticketRounded / 100) * 40;
  const finalPrice = ticketRounded - discount; //uguale a riga 28
  finalPriceRounded = Math.round((finalPrice + Number.EPSILON ) * 100) / 100;
  console.log(finalPriceRounded)
  message = `essendo over-65 gode della scontistica del 40% : invece di pagare ${ticketRounded}€ pagherà solo ${finalPriceRounded}€, le auguro una buona giornata!`;

} else if (userAge >= 18) {
  console.log("maggiorenne");
  message = `Purtoppo non usufruisce di nessuna scontistica : dovrà pagare ${ticketRounded}€, le auguro una buona giornata!`
} else {
  const discount = (ticketRounded / 100) * 20;
  const finalPrice = ticketRounded - discount; //uguale a riga 20
  finalPriceRounded = Math.round((finalPrice + Number.EPSILON) * 100) / 100;
  console.log(finalPriceRounded)
  message = `Essendo minorenne gode della scontistica del 20% : invece di pagare ${ticketRounded}€ pagherà solo ${finalPriceRounded}€, le auguro una buona giornata!`;
}

// Output
document.getElementById("message").innerHTML = message ;