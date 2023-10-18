// Raccolta dei dati
const userKm = parseInt(prompt("Inserisci i km che vuoi percorrere"));
const userAge = parseInt(prompt("inserire la sua età"));
console.log(userKm, userAge);

// Logica del programma

// Calcolo costo biglietto
const ticketPriceKm = 0.21;
const ticketPriceTotal = ticketPriceKm * userKm;
const ticketPriceRounded = Math.round((ticketPriceTotal + Number.EPSILON ) * 100) / 100;
console.log(ticketPriceRounded)