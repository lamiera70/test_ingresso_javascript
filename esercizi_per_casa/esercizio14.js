
console.log('Uno'); // istruzione sincrona eseguita per prima
setTimeout(() => console.log('Due'), 0);  // istruzione asincrona delegata al browser eseguita dopo tutte le funzioni sincrone
console.log('Tre'); // istruzione sincrona eseguita per seconda  

/*

1) Ordine di esecuzione delle istruzioni

Uno
Tre
Due



*/