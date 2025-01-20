
console.log('sono nel js....');

const bottone = document.querySelector('.btn');
const container = document.querySelector('.container');

bottone.addEventListener('click', (event) => {
    event.stopPropagation();
    alert('Hai cliccato il pulsante');
});

container.addEventListener('click', () => {
    alert('Hai cliccato il container');
});








