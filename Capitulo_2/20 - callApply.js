// A diferença entre o CALL e o APPLY é a FORMA como se PASSA os PARÂMETROS
// São FORMAS DIFERENTES de se INVOCAR uma FUNÇÃO, LEMBRE-SE que no JAVASCRIPT é FUNCIONA ENTÃO UMA FUNÇÃO NÃO NECESSARIAMENTE TERÁ VINCULO COM UM OBJETO

function getPreco(imposto = 0, moeda = 'R$') {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
  nome: 'Notebook',
  preco: 4589,
  desc: 0.15,
  // como já existe um MÉTODO com esse MESMO NOME, se eu colocar ASSIM, ele CRIARÁ UM ATRIBUTO e ASSOCIARÁ ao MÉTODO JÁ EXISTENTE
  getPreco,
}
console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.2 }
// A diferença ENTRE CALL e APPLY é a ORDEM com que se PASSA OS PARÂMETROS

// CALL - Recebe o CONTEXTO, e os valores
console.log(getPreco.call(carro, 0.17, '$'))

// APPLY - Recebe o CONTEXTO e após isso um ARRAY com os VALORES
console.log(getPreco.apply(carro, [0.17, '$']))
