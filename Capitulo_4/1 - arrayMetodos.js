const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos)

// Remove o elemento da última posição
pilotos.pop()
console.log(pilotos)

// Adiciona um elemento na última posição
pilotos.push('Verstappen')

// Adiciona o elemento na primeira posição
pilotos.unshift('Hamilton')
console.log(pilotos)

// Removendo o lemento da primeiro posição
pilotos.shift()
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3,1)
console.log(pilotos)

// RETORNANDO um NOVO ARRAY a PARTIR do INDICE INFORMADO
// Slice significa PEDAÇO, por isso o método se chamar SLICE, pois pegaremos um PEDAÇO do ARRAY e RETORNAREMOS EM UM NOVO ARRAY.
const algunsPilotos1 = pilotos.slice(2) // novo array retornado a partir do índice 2 e todo o resto
console.log(algunsPilotos1)

// novo array retornado a partir do índice 2 até o 4, MAS o ÚLTIMO ÍNDICE não é TRAZIDO, então ele não retornará o índice 4
const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)
