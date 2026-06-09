// Funzione che crea un timer che stampa un messaggio dopo un certo tempo
function creaTimer(tempo) {

    // Il timer è una funzione che, quando chiamata, avvia un timer che stampa un messaggio dopo il tempo specificato
    return function() {

        setTimeout(() => {
          console.log("Tempo scaduto!");
        }, tempo);

    }

}


// Esempio di utilizzo
const timer = creaTimer(1000);
timer() // dopo 1 secondo stampa 'Tempo scaduto!'