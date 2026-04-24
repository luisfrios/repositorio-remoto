const tela = require('readline-sync')

let loop:boolean = true

const num1:number = Number(tela.question('Insira o primeiro número: '))
const num2:number = Number(tela.question('Insira o segundo número: '))
const sinal = tela.question('Digite o sinal correspondente para o tipo de operação deseja fazer?\n\n(+) ADIÇÃO\n\n(-) SUBTRAÇÃO\n\n(*) MULTIPLICAÇÃO\n\n(/) DIVISÃO\n\nDigite aqui: ')

let resultado

switch(sinal){
	case"+":
		resultado = num1 + num2
		console.log(`\nO resultado da operação ${num1} ${sinal} ${num2} é: ${resultado}`)
	break
	case"-":
		resultado = num1 - num2
		console.log(`\nO resultado da operação ${num1} ${sinal} ${num2} é: ${resultado}`)
	break
	case"*":
		resultado = num1 * num2
		console.log(`\nO resultado da operação ${num1} ${sinal} ${num2} é: ${resultado}`)
	break
	case"/":
		resultado = num1 / num2
		console.log(`\nO resultado da operação ${num1} ${sinal} ${num2} é: ${resultado}`)
	break
	default:
		console.log('Este sinal não condiz a uma operação.')
	break
}
