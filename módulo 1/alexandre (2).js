let nome
let idade

 console.log("Qual é seu nome.")
 process.stdin.once('data', function(data) {
    nome = data.toString().trim()
        console.log("Qual a sua idade.")
        process.stdin.once('data', function(data) {
            idade = data.toString().trim()
            processamento(nome, idade)
            process.exit()
        })
    })

    function processamento(nome, idade) {
        if (idade >= 18) {
            console.log(`${nome}, voce  já é de maior.`)
        } else {
            let restantes = 18 - idade
            console.log(`${nome}, voce vai ser de maior em ${restantes} anos.`)
        }
    }


 

