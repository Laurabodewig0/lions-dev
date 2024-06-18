const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})
let elemento = []
exibirMenu()



	function exibirMenu() {
        console.log(`
        Menu:
        1. Cadastrar jogo
        2. Listar todos os jogos
        3. Editar jogo
        4. Remover jogo
        5. Sair
        `)
        rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
        case '1':
            cadastrarJogo()
        break
        case '2':
            listarJogo()
        break
        case '3':
            editarJogo()
        break
        case '4':
            removerJogo()
            break
            case '5':
        rl.close()
        break
        default:
        console.log('Opção inválida, tente novamente.')
        exibirMenu()
        break
        }
        })
        }
    

function cadastrarJogo() {
	rl.question('Digite o nome do jogo: ', (valkyriachronicles) => {
		rl.question('Digite o que é o jogo: ', (tiro) => {
			rl.question('Digite a funcao do jogo: ', (entretenimento) => {
				elemento.push({jogo: nome, tiro: objeto, entretenimento: parseFloat(entretenimento)})
				console.log('Jogo cadastrado com sucesso!')
				exibirMenu()
                valkyriachronicles,
                tiro,
                entretenimento
			})
		})
	})
}
function listarJogo() {
    if(elemento.length == 0 ) {
        console.log('nao tem nenhum elemento cadastrado')
        exibirMenu()
    } else {
   console.log(jogo)
   exibirMenu()
    }
}

function editarJogo() {
    if (vetor.length == 0) {
    } else {
    rl.question(' editar elemento: ', (numero) => {
    if (numero > 0 && numero <= vetor.length) {

    rl.question('Edite o nome do jogo: ', (valkyriachronicles) => {
    rl.question('Edite o que é o jogo: ', (tiro) => {
    rl.question('Edite a funcao do jogo: ', (entretenimento) => {
    vetor[numero - 1] = {
    valkyriachronicles ,
        tiro,
        entretenimento
    }
    console.log('editado com sucesso!')
    exibirMenu()
    })
    })
    })
    exibirMenu()
    }
    })
    
    }
    }

    function removerJogo() {
        if (vetor.length == 0) {
        console.log('Nada cadastrado.')
        exibirMenu()
        } else {
        console.log('remover ')
        vetor.forEach((elemento, index) => {
        console.log(`${index + 1}. ${elemento}`)
        })
        rl.question('Digite o número do elemento que deseja remover: ', (numero) => {
        if (numero > 0 && numero <= vetor.length) {
        vetor.splice(numero - 1, 1)
        console.log('Jogo removido com sucesso!')
        exibirMenu()
        } else {
        console.log('Número inválido, tente novamente.')
        exibirMenu()
        }
        }
        )}
        }
