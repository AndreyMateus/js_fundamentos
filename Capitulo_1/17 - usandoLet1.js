var numero = 1

// Já o LET diferentemente do VAR, o LET possui ESCOPO de BLOCO, ou seja: QUALQUER BLOCO VAI TRAVAR/BLOQUEAR ELE, ele NÃO É INVENCÍVEL.
{
  // Não dará conflito com a variável EXTERIOR, simplesmente pelo fato de que o MÉTODO que chama a variável, chamará a variável com o ESCOPO mais PRÓXIMO de SI.
  // Caso não existisse uma variável aqui dentro com o mesmo nome, o console.log pegaria a variável do lado de fora. EXEMPLO: se a declaração FOSSE 'let numero2 = 10', ele printaria o 'numero/variavel externa' sem problemas.

  let numero = 2
  console.log('dentro =', numero)
}

// imprimindo a variável VAR
console.log('fora =', numero)
