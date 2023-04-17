// Criando um array
const funcs = []

// armazenando as funções ANÔNIMAS DENTRO do ARRAY, assim poderemos chamar elas pelo índice
for (let i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i)
  })
}

// Irá printar os mesmos valores mesmo em diferentes índices que chamam as funções, conceito de CLOSURE:
// Irá pegar a REFERÊNCIA de onde o 'i' está, e não o valor, assim apontará DIRETO para o 'i' e trará o valor final/atual.

// Invocando a função através do índice do array
funcs[2]()

// Novamente invocando
funcs[8]()
