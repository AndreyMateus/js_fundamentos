// uma Função tem seu PRÓPRIO ARRAY INTERNO, é como se fosse o 'STRING[] ARGS' NO C#, que te permite passar valores via console e receber dentro da Main, porém aqui a Main será a própria função.
function soma() {
  let soma = 0
  for (i in arguments) {
    soma += arguments[i]
  }
  return soma
}

// Invocando a função e pessando valores para o ARRAY INTERNO da mesma.
console.log(soma(1, 1, 1, 1, 1, 1, 1, 1, 1))
// Cuidado, pois como o TIPO é DYNAMIC, ele concaterá ao FINAL, pois no momento que você passar uma string, ele trocará o TIPO de quem armazena, e assim armazenará/concatenará a string/valor.
console.log(soma(1.1, 2.2, 3.3, 'Teste'))
