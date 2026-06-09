// Funzione che crea un timer che stampa un messaggio ogni secondo e si ferma dopo un certo tempo
function eseguiFerma(tempoAvvio, messaggio, tempoStop) {

    return function () {

        // Stampa un messaggio ogni secondo
        const timerPartenza =
            setInterval(() => {
                console.log(messaggio)
            }, tempoAvvio);

        // Ferma il timer dopo un certo tempo    
        setTimeout(() => {
            clearInterval(timerPartenza)
        }, tempoStop);

    }
}

// Esempio di utilizzo
const avvia = eseguiFerma(1000, 'ciaoo!', 5000)
avvia()