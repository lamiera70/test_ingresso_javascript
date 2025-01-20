
console.log('sono nel js....');

const google = document.querySelector('a');

google.addEventListener('click', (evento) => {
    evento.preventDefault();
    // logica eventuale
    alert("La funzione di default è stata bloccata");
});



