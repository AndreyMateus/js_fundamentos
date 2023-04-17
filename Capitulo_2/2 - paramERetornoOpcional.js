// A função é DYNAMIC, pode RETORNAR algo, assim como pode NÃO RETORNA NADA.
function area(largura, altura) {
  const area = largura * altura
  if (area > 20) {
    console.log(`Valor acima do permitido: ${area} m2.`)
  } else {
    return area
  }
}

// Invocando a função
area(5, 6)
console.log(area())
area(5, 7, 6, 2, 1) // Se passar mais parâmetor que ela suporte, ele ignorará esses parâmetros
