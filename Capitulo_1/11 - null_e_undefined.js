let valor // não inicializada - undefined
console.log(valor)

valor = null // não é o não apontamento para algo, é a ausência de valor
console.log(valor)

//console.log(valor.toString()); // Erro !, não se pode acessar um tipo NULL

const produto = {}
console.log(produto.preco) // undefined
