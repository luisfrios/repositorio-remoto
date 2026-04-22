const tela = require('readline-sync')

const salario:number = Number(tela.question("Informe um salário: "))
const percentual = 0.15 // 15/100 
const resultado = salario + salario * percentual
console.log(`O salário com ajuste de 15% será: ${resultado}`)
