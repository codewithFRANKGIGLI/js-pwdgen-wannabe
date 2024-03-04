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
const userSurname = prompt('e il tuo cognome?')
console.log('Cognome: ' + userSurname)
document.getElementById('surname').innerHTML = ('Cognome: ' + userSurname);
// Chiedo il colore preferito:
const userColor = prompt('Qual è il tuo colore preferito?')
console.log('Colore Preferito: ' + userColor)
document.getElementById('color').innerHTML = ('Colore preferito: ' + userColor);

// LOGICA e OUTPUT
const suggestPwd = userName + userSurname + userColor + '23';
console.log(suggestPwd);
document.getElementById('pwd').innerHTML = ('Password suggerita: ' + suggestPwd);
