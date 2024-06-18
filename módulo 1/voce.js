let nome
let idade
const ano = 2024
console.log("Qual é seu nome.")
process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log("Qual a sua idade.")

    process.stdin.once('data', function(data){
        idade = parseInt(data.toString().trim())
        anonascimento(nome, idade)
        process.exit()  
    })
})
function anonascimento(nome, idade) {
    anonascimento = (ano - idade)
   console.log(`sua idade é ${idade}, e seu ano de nascimento caso já tenha feito aniversario esse ano é ${anonascimento}, caso nao tenha feito aniversario esse ano, é ${anonascimento - 1}`) 
}