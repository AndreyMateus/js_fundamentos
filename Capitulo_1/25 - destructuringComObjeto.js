// Criando um objeto
const pessoa = {
  nome: 'ana',
  idade: 5,

  endereco: {
    logradouro: 'Rua ABC',
    numero: 1000,
  },
}

// DESTRUCTURING é uma FORMA CURTA de RETIRAR PROPRIEDADES de dentro de um OBJETO, é tipo uma TUPLA ou Classe anônima no C#

// Usando o DESTRUCTURING
// basicamente, pegarei a PROPRIEDADE 'nome' e 'idade' do objeto 'pessoa', após isso as PROPRIEDADES RETIRADAS existiram no CONTEXTO/ESCOPO GLOBAL como se fossem variáveis.
const { nome, idade } = pessoa
console.log(nome, idade)

// Também posso dar novos nomes as PROPRIEDADES RETIRADAS
const { nome: novoNome, idade: novaIdade } = pessoa
console.log(novoNome, novaIdade)

// PEGANDO um OBJETO de DENTRO de OUTRO OBJETO
const {
  endereco: { logradouro, numero },
} = pessoa

console.log(logradouro, numero)
