// IIFE -> Immediately Invoked Function Expression
// Função Expressa Invocada Imediatamente

// Possui escopo LOCAL, ela serve para fugir do ESCOPO GLOBAL
;(function () {
  console.log('Será executado na hora!')
  console.log('Foge do escopo mais abrangente!')
})() // Invocando a função na HORA/IMEDIATAMENTE
