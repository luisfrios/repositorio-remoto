const tela = require('readline-sync')

const anoAtual:number = 2026
const anoNascimento:number = Number(tela.question("Insira o ano em que você nasceu: "))

const idade:number = anoAtual - anoNascimento

let maioridade:string

if (idade >= 18) {
	maioridade = "de maior"
} else {
	maioridade = "de menor"
}

console.log(`Você possui ${idade} anos, portanto, é ${maioridade}.`)
