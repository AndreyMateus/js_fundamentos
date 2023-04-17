// estrategia 1
function soma1(a, b, c) {
  // o || irá pegar o primeiro valor, caso não tenha, ele atribuirá ao valor passado após o ||.
  a = a || 1
  b = c || 1
  c = c || 1
  return a + b + c
}
console.log(soma1(), soma1(3), soma1(1, 2, 3))
console.log(soma1(0, 0, 0))

// estrategia 2
function soma2(a, b, c) {
  a = a !== undefined ? a : 1
  b = 1 in arguments ? b : 1
  c = isNaN(c) ? 1 : c
}

// estrategia 3 - PADRÃO ES 2015 - MELHOR FORMA
function soma3(a = 1, b = 1, c = 1) {
  return a + b + c
}
