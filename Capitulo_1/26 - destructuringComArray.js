// Pegando DADOS de UM ÍNDICE do ARRAY
const [a] = [10]
console.log(a)

// Basicamente estamos pegando os VALORES dos íncdices dos ARRAYS
// também podemos IGNORAR ÍNDICES, apenas deixando eles vázio
const [n1, , n3, n5, n6 = 0] = [0, 7, 9, 8]
console.log(n1, n3, n5, n6)
