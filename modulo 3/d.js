let vetor = [1,2,3,4,5]
let impar = []
for (let i = 0; i < vetor.length; i ++) {
    if (vetor[i]%2 != 0) {
        impar.push(vetor[i])
    }
}
console.log(impar)