/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//Chiedo all'utente di inserire una parola
var parola = prompt('Inserisci una parola');
//Creo la funzione per verificare se la parole è palidroma
function isPalidrome(parola) {
   return parola == parola.split('').reverse().join('');
}
//Stabilisco le condizioni per stampare in console
if ( isPalidrome(parola) ) {
  console.log( parola + ' è palidroma');
} else {
  console.log( parola + ' non è palidroma');
}
