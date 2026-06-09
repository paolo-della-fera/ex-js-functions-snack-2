// Funzione che crea un contatore automatico che incrementa ogni secondo
function creaContatoreAutomatico (tempo) {

    // Il contatore è una funzione che, quando chiamata, avvia un timer che incrementa un contatore ogni secondo e lo stampa
    let contatore = 0

    return function () {

        setInterval(() => {
            contatore++
            console.log(contatore)
        }, tempo)

    }
}

// Esempio di utilizzo
const avvia = creaContatoreAutomatico(1000)
avvia()