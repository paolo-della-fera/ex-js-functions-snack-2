// Funzione che stampa un messaggio ogni secondo
function stampaOgniSecondo(messaggio) {

    setInterval(() => {
        console.log(messaggio)
    }, 1000)

}

// Esempio di utilizzo
stampaOgniSecondo('questo è un Loop!')