// Em Javascript um OBJETO é uma COLEÇÃO de CHAVE e VALOR
// const prod = {chave : valor}

// Criando um OBJETO
const prod1 = {}

// OBS: se as propriedades não existirem, elas serão automaticamente criadas.
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.9

// também podemos usar outra forma de acessar e OU criar propriedades dentro do OBJETO
prod1['Desconto'] = 0.4
console.log(prod1)

// Criando um objeto e já atribuindo propriedades e seus valores
const prod2 = {
  nome: 'Camisa Polo',
  preco: 79.9,
}
