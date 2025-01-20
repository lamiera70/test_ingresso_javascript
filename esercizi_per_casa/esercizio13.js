
console.log('Inizio');
setTimeout(() => console.log('Timeout'), 2000);
console.log('Fine');

/*

"Inizio" viene stampato subito.

    La funzione di setTimeout registra il callback per essere eseguito tra almeno 2000 ms.

"Fine" viene stampato subito dopo.

    Dopo 2000 ms, l'Event Loop aggiunge il callback alla coda dei task.

"Timeout" viene stampato.

    Quando il call stack è libero,

1) Ordine di esecuzione delle istruzioni

Inizio
Fine
Timeout

2) Spiega come il browser gestisce il setTimeout

Il comportamento del setTimeout dipende dal funzionamento dell'Event Loop di JavaScript,
un meccanismo centrale nel suo modello asincrono. Ecco come funziona:

Thread principale (Call Stack):

    JavaScript esegue il codice riga per riga nel call stack.
    Ogni operazione sincrona viene gestita immediatamente.
    Operazioni asincrone (come setTimeout) non bloccano il thread principale;
    vengono "delegate" ad altre API.

Timer API del browser:

    Quando si chiama setTimeout, il browser attiva un timer interno.
    Questo timer gira indipendentemente dal thread principale.
    Il tempo specificato (in questo caso 2000 ms) indica quando il callback
    deve essere aggiunto alla coda dei task, non quando viene eseguito.

Coda dei task (Event Queue):

    Una volta che il timer scade, il callback (() => console.log('Timeout'))
    viene inserito nella coda dei task.
    La coda dei task è una lista di funzioni in attesa di essere eseguite.

Event Loop:

    L'Event Loop è un meccanismo che controlla continuamente il
    call stack e la coda dei task.
    Se il call stack è vuoto, l'Event Loop preleva il prossimo task
    dalla coda e lo inserisce nel call stack per essere eseguito.

*/