let vetor = [27, 10, 3, 0, 20, 5, 6, 3]
let vetorImpar  = []
let vetorPar = []

vetor.push(15)
console.log(vetor)
for(let i = 0; i < vetor.length; i++ ) {
    if(vetor[i]%2 !=0) {
        vetorImpar.push(vetor[i])
    } else{
        vetorPar.push(vetor[i])
}
}
console.log(vetorImpar)
console.log(vetorPar)