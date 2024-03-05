// Esercizio di oggi: (insicurissimo) password generator
// nome repo: js-pwdgen-wannabe
// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito23

// ACQUISIZIONE DATI
// Chiedo il nome:
const userName = prompt('Ciao, qual è il tuo nome?')
console.log('Nome: ' + userName)
document.getElementById('name').innerHTML = ('Nome: ' + userName);
// Chiedo il cognome:
const userLastname = prompt('e il tuo cognome?')
console.log('Cognome: ' + userLastname)
document.getElementById('surname').innerHTML = ('Cognome: ' + userLastname);
// Chiedo il colore preferito:
const userColor = prompt('Qual è il tuo colore preferito?')
console.log('Colore Preferito: ' + userColor)
document.getElementById('color').innerHTML = ('Colore preferito: ' + userColor);

// LOGICA e OUTPUT
const suggestPwd = userName + userLastname + userColor + '23';
console.log(suggestPwd);
document.getElementById('pwd').innerHTML = ('Password suggerita: ' + suggestPwd);


// BONUS
// chiedi all'utente un numero
// somma il numero a 23
// stampa la password sulla pagina con nomecognomecolorepreferito(23+numeroinserito)
// es. numero inserito => 5
// stampare=> mariorossiblu28

// ACQUISIZIONE DATI
// Chiedo il numero:
let userNumber = prompt('Ciao, dimmi un numero!')
// CONVERSIONE IN VALORE NUMERICO
let userNumberAsNumeric = parseInt(userNumber);
// SOMMA
let sum = userNumberAsNumeric + 23;
// STAMPO
console.log('Numero: ' + userNumber)
document.getElementById('number').innerHTML = ('Il numero scelto è: ' + userNumber);

// LOGICA E OUTPUT
const newUserPwd = userName + userLastname + userColor + sum;
console.log(newUserPwd);
// STAMPO
document.getElementById('newpwd').innerHTML = ('Nuova password suggerita: ' + newUserPwd);
