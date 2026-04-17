const texto = "O rato roeu a roupa do rei de Roma"

//para informar o tamanho do texto
console.log("Quantidade de caracteres no texto: "+texto.length)
//deixar o texto em caixa alta
console.log("Texto em caixa alta: "+texto.toUpperCase())
//deixar o texto em minúsculo
console.log("Texto em caixa baixa: "+texto.toLowerCase())
//verificação da palavra
console.log("Tem a palavra 'rato'? "+texto.includes("rato"))
console.log("Tem a palavra 'princesa'? "+texto.includes("princesa"))
console.log(texto.replaceAll("a","@"))
console.log(texto.replaceAll("e","3"))
console.log(texto.replaceAll("i","1"))
console.log("Eeeeitcha, José!!")

