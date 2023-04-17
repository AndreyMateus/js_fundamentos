// Arrays em JS são dinâmicos, não possuem tamanho fixo, e é HÉTEROGENEO
// OBS: mesmo podendendo ter diferentes tipos dentro do ARRAY, não é uma boa prática fazer isso, deixará seu código mais complexo.
const valores = [7.7, 8.9, 6.3, 9.2]

// array heterogeneo - evitar usar
valores.push({ id: 3 }, false, null, 'teste')
console.log(valores)

// pegando o tamanho do array
console.log(valores.length)

// Inserindo dados noa array
valores.push(2.0)
console.log(valores)

// Retirando o ÚLTIMO valor do Array
valores.pop()
console.log(valores)

// Também podemos usar o delete é remover um VALOR baseado no ÍNDICE
delete valores[2]
console.log(valores)
