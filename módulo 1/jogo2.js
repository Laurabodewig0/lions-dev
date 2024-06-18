let opcoes = ['pedra', 'papel', 'tesoura']
let escolhaComputador =''
let escolhaUsuario =''
let resultado =''
console.log("pedra, papel, tesoura.")
process.stdin.once('data', function (data) {
escolhaUsuario =(data.toString().trim())
escolhaComputador = opcoes[Math.floor(Math.random()* 2+1)]
console.log(escolhaComputador)
processamento()
process.exit()
})

function processamento (){
if (escolhaUsuario == escolhaComputador) {
    resultado == 'empate'
 console.log('empate')
} else if (escolhaUsuario =='pedra' && escolhaComputador == 'tesoura' || escolhaUsuario =='tesoura' && escolhaComputador == 'papel' || escolhaUsuario =='papel' && escolhaComputador == 'pedra'){
    resultado == "Voce venceu!!"
console.log('voce venceu.')
}else {
    console.log('voce perdeu.')
    resultado == 'Voce perdeu!!'
}
}