function stampaOgniSecondo(messaggio) {

    setInterval(() => {
        console.log(messaggio)
    }, 1000)

}

stampaOgniSecondo('questo è un Loop!')
