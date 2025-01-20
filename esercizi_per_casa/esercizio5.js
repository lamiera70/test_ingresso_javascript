
const numeriOriginali = [10, 20, 30];

console.log(numeriOriginali);

const numeriCopiati = [...numeriOriginali, 40];

console.log(numeriCopiati);

const persona = {
    nome: 'mario',
    cognome: 'rossi',
    età: 30,
    indirizzo: {
        città: 'roma',
        cap: 100100
    }
};

const personaCopiata = {
    ...persona,
    professione: 'developer'
}

console.log(persona);
console.log(personaCopiata);

console.log(persona);
console.log(personaCopiata);




