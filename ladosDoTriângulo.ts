//classificador de triângulos

const tela = require('readline-sync')

let loop:boolean = true

while(loop){
	console.log("Bem vindo ao sistema de checagem de triângulos! Informe os dados logo abaixo:")

	const lado1:number = Number(tela.question('Insira o lado 1: '))
	const lado2:number = Number(tela.question('Insira o lado 2: '))
	const lado3:number = Number(tela.question('Insira o lado 3: '))

//checagem
	if (lado1 === lado2 && lado2 === lado3 && lado3 === lado1){
		console.log(`Este é um triângulo equilátero! Pois possui todos os seus lados iguais.  Sendo seu lado A: ${lado1}, lado B: ${lado2} e lado C: ${lado3}.`)
	} else if (lado1 !== lado2 && lado2 !== lado3 && lado3 !== lado1){
		console.log(`Este é um triângulo escaleno! Pois possui todos os seus lados diferentes. Sendo seu lado A: ${lado1}, lado B: ${lado2} e lado C: ${lado3}.`)
	} else {
		console.log(`Este é um triângulo isóceles! Pois possui dois lados iguais e um diferente. Sendo seu lado A: ${lado1}, lado B: ${lado2} e lado C: ${lado3}.`)
	} const repetir:number = Number(tela.question('Deseja checar outo triângulo?\nSIM - 1\nNÃO - 2\nDigite aqui: '))
	loop = repetir  === 1 ? true : false

}
