// Função FACTORY é uma função que RETORNA um OBJETO

function criarPessoa() {
  return {
    nome: 'Ana',
    sobrenome: 'Silva',
  }
}

console.log(criarPessoa())

// outra FACTORY

function criarProduto(nome, preco) {
  // Retornando os parâmetro diretamente
  return {
    nome,
    preco,
    desconto: 0.1,
  }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))
