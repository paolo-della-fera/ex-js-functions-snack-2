function contoAllaRovescia(n) {

    const countdwon =
        setInterval(() => {
            console.log(n)
            n--
            if (n === 0) {
                console.log('Tempo Scaduto!')
                clearInterval(countdwon)
            }
        }, 1000)

}

// Esempio di utilizzo
contoAllaRovescia(5)