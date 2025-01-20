
const utente = {
    nome: 'Luca',
    dettagli: {
        indirizzo: {
            città: 'Milano'
        }
    }
};


console.log(utente?.dettagli?.indirizzo?.città);




const utente2 = {
    nome: 'Luca',
    dettagli: {
        posizione: {
            città: 'Milano'
        }
    }
};


console.log(utente2?.dettagli?.indirizzo?.città);

