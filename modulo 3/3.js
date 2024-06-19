console.log('Qual é a nota?')
process.stdin.once('data', function(data) {
    let nota = parseFloat(data.toString().trim())
    console.log(resposta(nota))
    process.exit()
})

function resposta(nota) {
    switch(true) {
        case (nota >= 90 && nota <= 100):
            return 'A';
        case (nota >= 80 && nota <= 89):
            return 'B';
        case (nota >= 70 && nota <= 79):
            return 'C';
        case (nota >= 60 && nota <= 69):
            return 'D';
        case (nota >= 0 && nota <= 59):
            return 'F';
        default:
            return 'nota invalida'
    }
}

console.log("Consegui")
