let numero
console.log("O numero x é divisivel por 5.")
process.stdin.once('data', function(data) {
    numero = data.toString().trim()
    console.log("O numero x nao é divisivel por 5.")
    process.stdin.once('data', function(data) {
        processamento(numero)
        process.exit()
    })
})

function processamento(numero) {
    if(numero == 10 ) {
        console.log(`${numero}, e divisivel por 5.`)
    } else {
        console.log(`${numero}, nao e divisivel por 5`)
    }
}