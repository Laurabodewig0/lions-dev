let resposta
let numeroAleatorio = 0
console.log("Qual é o numero de lados do dado.")
process.stdin.once('data', function (data) {
    resposta = parseInt(data.toString().trim())
numeroAleatorio = Math.floor(Math.random()* resposta+1)
console.log(numeroAleatorio)
    process.exit()
})
