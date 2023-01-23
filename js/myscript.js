//CHIEDO IL NOME ALL'UTENTE
const firstName = prompt("Qual'è il tuo nome?");

console.log(firstName);


//CHIEDO IL COGNOME ALL'UTENTE
const surName = prompt("Qual'è il tuo cognome?");

console.log(surName);


//CHIEDO ALL'UTENTE IL SUO COLORE PREFERITO
const favouriteColour = prompt("Qual'è il tuo colore preferito?");

console.log(favouriteColour);


//RENDO IL NUMERO 23 UNA VARIABILE INT INVECE DI STRING
const myInt = 23;


//CONCATENO NOME E COGNOME E COLORE PREFERITO
const welcome_msg = `${firstName}${surName}${favouriteColour}${myInt}`;

console.log(welcome_msg);


//SCRIVO NELL'HTML ALL'INTERNO DEL TAG h1
document.getElementById("welcome_title").innerHTML = welcome_msg;