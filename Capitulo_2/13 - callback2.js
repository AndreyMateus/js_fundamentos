// Uma callback é uma FUNÇÃO que será CHAMADA para CADA ELEMENTO de DETERMINADA COLEÇÃO
const notas = [7.7, 6.5, 2.6, 5.2, 8.9, 7.1, 9.0]

// Sem callback
let notasBaixas = []
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas.push(notas[i])
  }
}
console.log(notasBaixas)

// Com callback
const notasBaixas2 = notas.filter((nota) => nota < 7) // essa função será chamada para cada um dos elementos do array
console.log(notasBaixas)

// OU
const notasBaixas3 = notas.filter(function (nota) {
  return nota < 7
})
console.log(notasBaixas3)
