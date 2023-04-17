// Importante: EVITE USAR o HOISTING, POIS NÃO HÁ MOTIVOS PARA USÁ-LO, ISTO É APENAS PARA VOCÊ TER NOÇÃO DE QUE o HOISTING EXISTE.

// Hoisting/Içamento é o ATO do JAVASCRIPT PEGAR TODAS as variáveis declaras com VAR e içar o valor delas.
// Exemplo: Imagine que Você declarou uma variável na linha 30, por ventura você não conseguiria acessar essa variável na linha 10, pois a variável ainda não teria sido declarada, na teoria o programa lê os códigos de cima para baixo, correto ?, porém no JAVASCRIPT quando o USAMOS o VAR, ISSO NÃO ACONTECE, ele jogará A DECLARAÇÃO da variável que está usando VAR em um "POOL de memória" que pode ser ACESSADO de QUALQUER PARTE do código, seja ANTES da variável ser DECLARADA ou DEPOIS que é o normal.

// não conseguirá acessar o valor dela, porém conseguirá saber que ela existe.
console.log(a) // Hoisting/Içamento

var a = 2
console.log(a)

// DENTRO de uma FUNÇÃO ocorre o MESMO EFEITO do HOISTING/IÇAMENTO
function teste() {
  console.log(a) // Hoisting/Içamento
  var a = 2
  console.log(a)
}
teste()

// para NÃO USARMOS o HOISTING, basta usarmos o LET
console.log(b) // gerará um ERRO, pois a variável não existirá, e NÃO sofrerá o hoisting/içamento
let b = 2
console.log(b)
