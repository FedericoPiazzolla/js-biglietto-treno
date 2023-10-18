// Raccolta dei dati
const userKm = parseInt(prompt("Inserisci i km che vuoi percorrere"));
const userAge = parseInt(prompt("inserire la sua età"));
console.log(userKm, userAge);

// Logica del programma

// Determino l'età dell'utente
if (userAge > 65) {
  console.log("over 65");
} else if (userAge >= 18) {
  console.log("maggiorenne");
} else {
  console.log("minorenne");
}

// Calcolo costo biglietto
const ticketPriceKm = 0.21;
const ticketPriceTotal = ticketPriceKm * userKm;
const ticketPriceRounded = Math.round((ticketPriceTotal + Number.EPSILON ) * 100) / 100;
console.log(ticketPriceRounded)