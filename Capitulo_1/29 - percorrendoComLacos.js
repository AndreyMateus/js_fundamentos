// Criando um array
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

// Percorrendo um array
for (let i in notas) {
  console.log(i + ' - ' + notas[i])
}

// Criando um OBJETO
const pessoa = {
  nome: 'Ana',
  sobrenome: 'Silva',
  idade: 29,
  peso: 64,
}

// Percorrendo um OBJETO, o FOR IN é ESPECIFCO para PERCORRER OBJETO
for (let atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`)
}

// ------------------------------------

const pessoas = [
  { nome: 'Maria', idade: 30 },
  { nome: 'João', idade: 25 },
  { nome: 'Ana', idade: 40 },
]

// usando um loop for...of
for (let pessoa of pessoas) {
  console.log(pessoa.nome, pessoa.idade)
}

// usando forEach()
pessoas.forEach((pessoa) => {
  console.log(pessoa.nome, pessoa.idade)
})
