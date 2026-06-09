const somma = (a,b) => a + b
const moltiplicazione = (a,b) => a * b


const eseguiOperazione = (a, b, operazione) => operazione(a,b)

console.log(eseguiOperazione(5, 7, somma));        // 12
console.log(eseguiOperazione(8, 9, moltiplicazione)); // 72