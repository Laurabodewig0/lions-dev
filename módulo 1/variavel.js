let opiniao
let gostadecafe
console.log("Você gosta de café.")
process.stdin.once('data', function(data) {
    opiniao = data.toString().trim()
    processamento(opiniao)
    process.exit()
})

function processamento(opiniao) {

} 
if (resposta == "sim") {
gostadecafe = true
} else {
    gostadecafe = false
}
if(gostadecafe == true){
    console.log("que bom.")
} else {
    console.log("que chato.")
}
