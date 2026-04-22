const tela = require('readline-sync')

const altura:number = Number(tela.question("Insira a altura do retângulo: "))
const largura:number = Number(tela.question("Insira a largura do retângulo: "))

const area:number = altura * largura
const perimetro:number = (altura + largura) * 2

console.log(`O retângulo com ${altura} de altura e ${largura} de largura tem uma área de ${area} e um perímetro de ${perimetro}.`)
