let nome
let idade
const anoAtual = 2024
console.log( 'como é seu nome?')
process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log('qual é sua idade?')

    process.stdin.once('data', function(data) {
        idade = parseInt(data.toString().trim())
        processamento(nome, idade)
        process.exit()
    })
})

function processamento(nome, idade) {
     let diferença = anoAtual - idade
    console.log(`olá ${nome}, você tem ${idade} e você nasceu no ano ${diferença}`)}
