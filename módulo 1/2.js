let = 'num1';
let = 'num2';
let = 'operacao';
function calculadora(num1, num2, operacao) {
switch (operacao) {
    case'+':
    return num1 + num2
    case'-':
    return num1 - num2
    case'*':
    return num1 * num2
    case'/':
    return num1 / num2
    default:
    console.log("o operador que voce digitou é invalido")
}
}
console.log(calculadora(5,1,'+'))
console.log(calculadora(5,1,'-'))
console.log(calculadora(5,1,'*'))
console.log(calculadora(5,1,'/'))