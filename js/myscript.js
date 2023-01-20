//CHIEDO IL NOME ALL'UTENTE
let firstName = prompt("Qual'è il tuo nome?");
console.log(firstName);

//CHIEDO IL COGNOME ALL'UTENTE
let surName = prompt("Qual'è il tuo cognome?");
console.log(surName);

//CHIEDO ALL'UTENTE IL SUO COLORE PREFERITO
let favouriteColour = prompt("Qual'è il tuo colore preferito?");
console.log(favouriteColour);

//CONCATENO NOME E COGNOME E COLORE PREFERITO
let welcome_msg = `Benvenuto 
${firstName} ${surName}, 
il tuo colore preferito è il ${favouriteColour}`;
console.log(welcome_msg);