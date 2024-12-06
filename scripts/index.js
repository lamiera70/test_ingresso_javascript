console.log('Sono nel js.......');

// variabili

const btn1 = document.querySelector('#btn1');

const btn2 = document.querySelector('#btn2');

const btn3 = document.querySelector('#btn3');

const btn4 = document.querySelector('#btn4');

const txt1 = document.querySelector('h1');

const corpo1 = document.querySelector('header');

btn1.addEventListener('click', sovrascriviTesto);

btn2.addEventListener('click', aggiungiClasse);

btn3.addEventListener('click', rimuoviClasse);

btn4.addEventListener('click', aggiungiParagrafo);


// funzioni

function sovrascriviTesto() {
    txt1.textContent = 'Questo è il testo sovrascritto dal Bottone 1';
}


function aggiungiClasse() {
    txt1.classList.add('rosso');
}


function rimuoviClasse() {
    txt1.classList.remove('rosso');
}


function aggiungiParagrafo() {
    const paragrafo = document.createElement('p');
    const inserisciTesto = prompt('Inserisci del testo:');
    const testo = document.createTextNode(inserisciTesto);
    paragrafo.appendChild(testo);
    corpo1.appendChild(paragrafo);
}





