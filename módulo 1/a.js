let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0];
let media = 0
let soma = 0
let notaMaxima = notas[0]
let notaMinima = notas[0]
let notasAcimaDaMedia = 0
let reprovados = 0
for (let i = 0; i < notas.length; i++) {
console.log(notas[i])
}
for (let i = 0; i < notas.length; i++) {
soma = soma +=notas[i]
} media = soma/notas.length
console.log(`a media é ${media}`)

for (let i = 0; i < notas.length; i++) {
    if(notas[i]>notaMaxima) {
notas = notaMaxima
    }
}
console.log(`a nota Maxima foi ${notaMaxima}`)
console.log(`a nota minima foi ${notaMinima}`)

for (let i = 0; i < notas.length; i++) {
    if(notas[i]>media) {
        notasAcimaMedia ++
    }
}
console.log(`as notas acima da media foram ${notasAcimaDaMedia}`)
notas.push(8)
console.log(`${notas}`)

for (let i = 0; i< notas.length; i ++) {
    if (notas[i]<6.0) {
        reprovados ++
    }
}
console.log(`as notas reprovadas foram ${reprovados}`)
/*a) foi usado o for para percorrer o vetor e o console log para imprimir todas as notas
b) as entradas são as variaveis e as saidas são os console log
c)notas: vetor com as notas 
soma:somou as notas
media:fez a media das notas 
notaMaxima:foi usada para encontrar a maior nota
notaMinima:foi usada para encontrar a menor nota
notasAcimaDaMedia:foi usada para contar quantas notas estão acima da media
reprovados:foi usado para contar quantas notas estao abaixo de 6*/
