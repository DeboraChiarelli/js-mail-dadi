//# Mail
//- Chiedi all’utente la sua email 
//    - dichiaro l'array
const mailLists = ["mail00@gmail.com", "mail01@gmail.com", "mail02@gmail.com", "mail03@gmail.com", "mail04@gmail.com"];
console.log(mailLists)
//    - assegno alla variabile il valore costituito da un prompt
const promptMail = prompt ("Inswerisci la tua email", "mail00@gmail.com");
//- controllo che sia nella lista di chi può accedere 
//    - creo una variabile di controllo falsa, con accesso negato
let control = false;
//    - creo un ciclo per cercare l'email nell'indice
for (let i = 0; i < mailLists.length; i++) {
//    - SE è presente 
      if (mailLists[i] === promptMail) {
        control = true;                   // ALLORA cambio il valore di control 
      }
}
console.log(control);
//- SE è true 
if (control) {
    console.log(`${promptMail} è presente il lista`);    // ALLORA sarà presente in lista 
} else {
    console.log(`${promptMail} non è presente in lista`); // ALTRIMENTI non sarà presente in lista 
}


//# Dadi
//- Genero un numero random da 1 a 6, sia per il giocatore sia per il computer.
const player = Math.floor(Math.random() * 6) +1;
console.log(player);
const computer = Math.floor(Math.random () * 6) +1;
console.log(computer);
//- Stabilisco il vincitore, in base a chi fa il punteggio più alto.
//  - SE il numero random del player è maggiore del computer
      if (player > computer) {
        console.log('player wins');     //    ALLORA il player ha vinto  
      } else if (player < computer) {   // - SE il numero random del player è minore del computer
        console.log('player loose')     //   ALLORA il player ha perso
      } else {                          // - SE il numero random del player e del computer è uguale
        console.log('tie')              //   ALLORA pareggiano
      }




