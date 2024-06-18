let somaPares = 0
let somaImpares = 0
let totalPares = 0
let totalImpares = 0 
let mediaPares = 0
let mediaImpares = 0

for(let i = 0; i< 999; i++) {
if (i%2 == 0) {
    totalPares++
    somaPares +=i
}else{
    totalImpares++
    somaImpares+=i
}
}

mediaPares = somaPares / totalPares
mediaImpares = somaImpares / totalImpares

console.log(`a soma dos numeros pares é ${somaPares}`)
console.log(`a soma dos numeros impares é ${somaImpares}`)
console.log(`o total de numeros pares é ${totalPares}`)
console.log(`o total de numeros impares é ${totalImpares}`)

if(somaPares > somaImpares){
    console.log('a soma dos numeros pares é maior que a soma dos impares')
}else if(somaImpares > somaPares){
    console.log('a soma dos numeros impares é maior que a soma dos pares')
}else{
    console.log('a soma dos numeros pares é igual a soma dos numeros impares')
}
