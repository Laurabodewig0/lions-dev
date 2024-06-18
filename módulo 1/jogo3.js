let caracteres = 'ABcd12345'
let senha = ''
let comprimentoSenha
let numero 
console.log("Quantos digitos tem a senha.")
process.stdin.once('data', function (data) {
    comprimentoSenha = parseInt(data.toString().trim())
    for(let i = 0; i < comprimentoSenha; i++){
    numero = Math.floor(Math.random()*caracteres.length)+1 
    senha += caracteres.charAt(numero)
    }
console.log(senha)
process.exit()
})