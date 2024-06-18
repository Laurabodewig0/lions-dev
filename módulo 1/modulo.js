let numero
console.log('qual é o numero.')
process.stdin.once('data', function(data) {
    numero = data.toString().trim()
    processamento(numero)
    process.exit()
})

function processamento(numero) {
    if(numero == 0){
        console.log("O numero que você digitou é zero")
    } else if (numero % 2 == 0) {
    console.log("O numeero que você digitou é par.")
} else {
    console.log("O numero que você digitou é impar.")
}}
