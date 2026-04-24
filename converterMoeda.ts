const tela = require('readline-sync')

let loop:boolean = true

while(loop){
const valor:number = Number(tela.question('Insira um valor em real para ser convertido: '))
const moeda = tela.question('Insira para qual moeda deseja fazer a conversão\nDOLAR - D\nEURO - E\nPESO ARGENTINO - P\nInsira o caractere: ')

let formatado:string
let conversao

switch(moeda){
	case"D":
		conversao = valor / 5.02
	formatado = conversao.toFixed(2)
		console.log(`O valor em real é: ${valor}, e em dólar é: ${formatado}.`)
	break
	case"E":
                conversao = valor / 5.88
	formatado = conversao.toFixed(2)
                console.log(`O valor em real é: ${valor}, e em euro é: ${formatado}.`)
        break
	case"P":
                conversao = valor / 0.0036
	formatado = conversao.toFixed(2)
                console.log(`O valor em real é: ${valor}, e em peso argentino é: ${formatado}.`)
        break
	default:
		console.log('O conversor não reconhece esta moeda.')
} const repetir:number = Number(tela.question('Deseja converter mais algum valor?\nSIM - 1 | NÃO - 2\nDigite sua resposta: '))
loop = repetir === 1 ? true : false
}
