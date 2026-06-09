// Arrow function che calcola la somma e la moltiplicazione di due numeri, e una funzione che esegue l'operazione passata come argomento
const somma = (a,b) => a + b
const moltiplicazione = (a,b) => a * b


// Funzione che esegue l'operazione passata come argomento
const eseguiOperazione = (a, b, operazione) => operazione(a,b)


// Esempio di utilizzo
console.log(eseguiOperazione(5, 7, somma));           // 12
console.log(eseguiOperazione(8, 9, moltiplicazione)); // 72