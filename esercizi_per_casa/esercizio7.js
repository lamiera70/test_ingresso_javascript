
const utente = {
    isAdmin: true
};



// if (utente && utente.isAdmin) {
//     console.log('Accesso consentito');
// } else {
//     console.log('Accesso negato');
// };

// con ternary operator

utente && utente.isAdmin ? console.log('Accesso consentito') : console.log('Accesso negato');