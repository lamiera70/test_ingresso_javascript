
const persona = {
    nome: 'mario',
    cognome: 'rossi',
    età: 30,
    indirizzo: {
        città: 'roma',
        cap: 100100
    }
};

const {nome, indirizzo: {città}} = persona;
console.log(nome);
console.log(città);


// const personaModificata = {...persona};
// personaModificata.nome = 'alessandro';
// personaModificata.cognome = 'magno';


const personaModificata = {...persona, indirizzo: {...persona.indirizzo, città: 'milano'}};


console.log(persona);           // L'oggetto originale rimane invariato
console.log(personaModificata); // L'oggetto modificato ha la nuova città


