const tela = require('prompt-sync')()

var nome:string
var idade:number

nome = tela('Qual é o seu nome? ')
idade = Number( tela('Qual é sua idade? '))

console.log("nome: " + nome + ", idade: " + idade)
