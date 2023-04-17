// function declaration
// esse tipo de declaração sofre hoisting, então pode ser usada antes de sua declaração, porém ela tem de estar declarada.
console.log(soma(1, 2)) // chamando a função antes da declaração
function soma(x, y) {
  return x + y
}

// function expression
const sub = function (x, y) {
  return x - y
}

// named function expression -> é a soma das duas opções acima
// a única coisa que muda ao dar nome em uma função armazená-la na variável, é que ao debugar ou na STACKTRACE caso ocorre um erro, o nome da função aparecerá lá, já nas funções anônimas não aparecerá.
const mult = function mult(x, y) {
  return x * y
}
