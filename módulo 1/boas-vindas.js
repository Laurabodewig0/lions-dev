let nome = '';
console.log('qual é seu nome')
process.stdin.on('data' , function(data){
    let nome = data.toString();
    let saudacao = 'ola,' + nome
    console.log(saudacao)
})
