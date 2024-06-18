let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let vetorImpar = []
for(let i = 0; i < vetor.length; i++) {
    if(vetor[i]%2 !=0) {
    vetorImpar.push(vetor[i])
    }
}
console.log(vetorImpar)