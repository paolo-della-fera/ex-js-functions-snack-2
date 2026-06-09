function creaTimer(tempo) {
    return function() {

        setTimeout(() => {
          console.log("Tempo scaduto!");
        }, tempo);

    }

}

const timer = creaTimer(1000);
timer() // dopo 1 secondo stampa 'Tempo scaduto!'