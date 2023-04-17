// Função em JS é First-Class Object (Citizens)
// Higher-order function -> função de alta ordem -> Função é tratada como dado
// Resumo: Isso tudo significa que você pode tratar a FUNÇÃO como um DADO, e sendo um DADO você passá-la como parâmetro, retornar uma função e etc..

// Criando uma função de fomra literal
function fun1() {}

// Armazenando uma FUNÇÃO em uma VARIÁVEL
const fun2 = function () {}

// Armazenar em um array
const array = [
  function (a, b) {
    return a + b
  },
  fun1,
  fun2,
]

// Invocando a função do índice 0
console.log(array[0](2, 2))

// Armazenar em um ATRIBUTO de OBJETO
const obj = {}
obj.falar = function () {
  return 'Olá'
}

// Invocando a função de dentro do objeto
console.log(obj.falar())

// Criando uma função que RECEBE uma FUNÇÃO como parâmetro
function run(fun) {
  fun()
}

// Invocando e passando uma função como PARÂMETRO
run(obj.falar)

// Uma função pode retornar/conter uma OUTRA função
function soma(a, b) {
  return function (c) {
    console.log(a + b + c)
  }
}

// Invocando a função e também a função RETORNADA
soma(2, 5)(5)

// também poderíamos armazenar o RETORNO da FUNÇÃO em uma VARIÁVEL e executar o retorno através desta variável, assim:
let funcaoRetornad = soma(2, 5)
funcaoRetornad(5)
