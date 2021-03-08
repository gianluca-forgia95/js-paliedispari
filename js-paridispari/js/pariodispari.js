/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

//Chiedo all'utente di inserire pari o Dispari
var pariDispari = prompt('Pari o Dispari?');
//Chiedo all'utente un numero da 1 a 5
var numero = parseInt(prompt('Inserisci un numero tra 1 e 5'));
//Genero un numero random tra 1 e 5 per il computer
//Funzione per generarlo
function randomNumber( min, max) {
 return parseInt(Math.random() * (max - min) + min);
}
//Determino tra quali valori voglio il numero random con la variabile
var random = randomNumber(0 ,5);
//Stampo la somma dei numeri
console.log( random + numero );
