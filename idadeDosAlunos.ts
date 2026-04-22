const tela = require('readline-sync')

const aluno:string = (tela.question('Informe o nome do aluno: '))
const idade:number = Number(tela.question('Informe a idade do aluno: '))

let resultado:string

if (idade >= 5 && idade < 8) {
	resultado = 'Infantil A'
} else if (idade >= 8 && idade < 11) {
	resultado = 'Infantil B' 
} else if (idade >= 11 && idade < 14) {
	resultado = 'Juvenil A'
} else if (idade >= 14 && idade < 18) {
	resultado = 'Juvenil B'
} else if (idade >= 18){
       resultado = 'Adulto'
} else {
	resultado = 'Não há classificação' 
}

console.log(`O aluno ${aluno} possui ${idade}, por isso, se enquadra no ${resultado}.`)
