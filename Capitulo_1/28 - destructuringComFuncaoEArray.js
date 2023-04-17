// criando uma função que ESPERA um ARRAY DESESTRUTURADO como PARÂMETRO um ARRAY
function rand([min, max]) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

// Invocando a função e PASSANDO ARRAY
console.log(rand([50, 90]))
