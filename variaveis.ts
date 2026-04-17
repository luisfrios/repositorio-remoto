const tela = require('readline-sync')

//declarando as variáveis
let nome:string
let idade:number

//setando valores
nome = tela.question('Qual é o seu nome? ')
idade = Number( tela.question('Qual é sua idade? '))

//saída de informações
console.log("nome: " + nome + ", idade: " + idade)
