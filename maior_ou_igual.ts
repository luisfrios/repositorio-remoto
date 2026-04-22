const tela = require('readline-sync')

const numero1:number = Number(tela.question("Insira um número inteiro: "))
const numero2:number = Number(tela.question("Insira um número inteiro: "))


if (numero1 > numero2) {
	console.log(`O número ${numero1} é maior que o número ${numero2}.`)
} else if (numero2 > numero1) {
	console.log(`O número ${numero2} é maior que o número ${numero1}.`)
} else {
	console.log(`Os números são iguais`)
}


