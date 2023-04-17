var numero = 1

// Irá printar os DOIS consoles, pois a variável está em escopo GLOBAL
{
  var numero = 2
  console.log('dentro', numero)
}
console.log('fora', numero)
