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
let discount = "";
let finalPrice = "";
let finalPriceRounded = "";
if (userAge > 65) {
  discount = (ticketRounded / 100) * 40;
  finalPrice = ticketRounded - discount; //uguale a riga 28
  finalPriceRounded = Math.round((finalPrice + Number.EPSILON ) * 100) / 100;
  console.log(finalPriceRounded)
  console.log("over 65");
} else if (userAge >= 18) {
  console.log("maggiorenne");
} else {
  const discount = (ticketRounded / 100) * 20;
  const finalPrice = ticketRounded - discount; //uguale a riga 20
  const finalPriceRounded = Math.round((finalPrice + Number.EPSILON) * 100) / 100;
  console.log(finalPriceRounded)
  console.log(`essendo minorenne gode della scontistica del 20% : ${finalPriceRounded}€`);
}

// Output
document.getElementById("message").innerHTML = finalPriceRounded