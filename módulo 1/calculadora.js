let num1
let num2
let operacao
function calculadora(num1, num2, operacao ) {
    if(operacao == '+') {
        let adicao = num1 + num2
        return adicao
    }else if (operacao == '-') {
        let subtracao = num1 - num2
        return subtracao
    }else if (operacao == '*') {
        let multiplicacao = num1 * num2
        return multiplicacao
    }else if (operacao =='/') {
    let divisao = num1 / num2
    return divisao
    }
}
console.log(calculadora(5,1,'+'))
console.log(calculadora(5,1,'-'))
console.log(calculadora(5,1,'*'))
console.log(calculadora(5,1,'/'))