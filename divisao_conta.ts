const tela = require("readline-sync")

const valorConta:number = Number(tela.question("Insira o valor total da conta: "))
const totalPessoas:number = Number(tela.question("Insira a quantidade de pessoas: "))
const taxaServico:number = 0.10 // 10%

const valorTaxa:number = valorConta + valorConta * taxaServico

const valorFinal:number = valorTaxa / totalPessoas

console.log(`O valor total da conta foi de R$${valorConta}, com a taxa de 10% ficou R$${valorTaxa}, dividindo para as ${totalPessoas} pessoas presentes fica um valor de R$${valorFinal} para cada um.`)
