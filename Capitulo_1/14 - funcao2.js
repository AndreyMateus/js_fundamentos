// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
  console.log(a + b)
}

imprimirSoma(2, 2)

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
  return a + b
}
console.log(soma(3, 2))

// retorno implicito
const somarImplicito = (a, b) => a + b
console.log(somarImplicito(4, 2))
