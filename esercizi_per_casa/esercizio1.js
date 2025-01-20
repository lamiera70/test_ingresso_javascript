
var a = 10;
var b = 20;

var a = 20;


function sommaNumeri() {
    console.log(a + b);
}


sommaNumeri();  // 40


// se dichiaro la variabile con var posso riassegnare la stessa variabile con lo stesso nome
// se dichiaro la variabile con let non lo posso fare 


function sommaNumeriDue() {
    let a = 20;
    let b = 30;
    console.log(a + b);

}


sommaNumeriDue(); // 50


//  hoisting (galleggiamento)
// se uso var mi da come risultato NaN
// se uso let da errore

function sommaNumeriTre() {
    console.log(x + y);
}

sommaNumeriTre();

var x = 100;
var y = 200;





// se dichiaro una variabile con const il suo valore dichiarato iniziale rimane costante
// cioe' non posso modificare successivamente il suo valore
// esempio
//
// const x = 10;
// x = 20;  Questo darà un errore: "Assignment to constant variable."

// se dichiaro un oggetto o array con const posso modificare il suo contenuto
// esempio
//
// const persona = { nome: "Mario", età: 30 };
//
// persona.nome = "Luigi";   // Questo è permesso
// persona.età = 35;         // Anche questo è permesso
//
// console.log(persona);  // { nome: "Luigi", età: 35 }



