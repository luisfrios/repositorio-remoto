const nota1 = 5.0
const nota2 = 6.0
const nota3 = 7.0

const media = (nota1 + nota2 + nota3) / 3

//aluno aprovado somente com nota maior ou igual a 7.0

if (media >= 7) {
	console.log("Aluno aprovado com média: "+media)
} else {
	console.log("Aluno reprovado com média: "+media)
}
