// Arrays/Listas/Vetores
// Arrays se assemelham com bancos de dados
// Um array deve ser capaz de: Adicionar, Remover, Buscar/Listar Atualizar

// var nome =`Fulano` // variavel simples
var momes = `Fulano` // varialvel simples
var nomes = [`Miguel`, `Mathues`, `Monica`] //variavel composta (array)

console.log(nomes)
//console.log(nomes[0]) // Acessa posisão 0 - Miguel
//console.log(nomes[1]) // Acesssa posição 1 - Mathues
//console.log(nomes[2]) // Acessa posição 2 = Monica

nomes.push(`Davi`, `Fulano`, `Ciclano`) // Adiciona elementos no array
console.log(nomes) 

console.log(nomes.length) // Tamanho do array 

nomes.pop() // por padrão remove o ultimo elemento do array
console.log(nomes)

nomes.reverse() // inverte meu array 
console.log(nomes)

nomes.shift() // por padrão remove o primeiro elemento do array
console.log(nomes)

nomes.sort() // ordena array
console.log(nomes)

nomes.push(`Fulano`)
console.log(nomes)

var posisãoFulano = nomes.indexOf(`Fulano`) // Busca por indice o elemento do 

nomes[posisãoFulano, 1] // Primeiro parametro é a posição do item a
console.log(nomes)

// nomes.shift() // por padrão remove o primeiro elemento do array 
// console.log(nomes)