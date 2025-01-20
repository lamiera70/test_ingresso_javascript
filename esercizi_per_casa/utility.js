
const somma = (a, b) => {
    const numeroA = prompt('inserisci il primo numero');
    const numeroB = prompt('inserisci il secondo numero');
    const risultato = parseInt(numeroA) + parseInt(numeroB);
    return (alert(`Il risultato è : ${risultato}`));
};


export {somma};


