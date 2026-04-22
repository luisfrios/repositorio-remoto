const tela = require('readline-sync')

const m:number = Number(tela.question('Informe o valor em metros: '))
const cm:number = m * 100
const mm:number = m * 1000

console.log(`Metro(s): ${m}\nCentímetros: ${cm}\nMilímetros: ${mm}`) 
