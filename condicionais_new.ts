const tela = require('readline-sync')

//inserir o nome do aluno

const nome:string = tela.question('Informe o nome do aluno: ')

//inserir as notas

const nota1:number = Number(tela.question('Informe a primeira nota: '))
const nota2:number = Number(tela.question('Informe a segunda nota: '))
const nota3:number = Number(tela.question('Informe a tereira nota: '))
const faltas:number = Number(tela.question('Informe a quantidade de faltas: '))

//média

const media = (nota1 + nota2 + nota3) / 3

//aluno aprovado só com média maior ou igual a 7.o
let situacao:string

if (media >= 7 && faltas < 5) {
	situacao = "Aprovado(a)"
} else {
	situacao = "Reprovado(a)"
}

console.log(`Aluno(a): ${nome} obteve a média de ${media} e está ${situacao}.`)

