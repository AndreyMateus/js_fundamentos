// OBS: só existem 2 TIPOS de ESCOPOS, GLOBAL ou de FUNÇÃO.
// ESCOPO de VAR, quando se CRIA uma VARIÁVEL FORA de uma FUNÇÃO, o ESCOPO é GLOBAL,a variável pode ser acessada de qualquer lugar, inclusive SOBREESCRITA.
{
  {
    {
      {
        {
          {
            var sera = 'Será ????'
            console.log(sera) // funcionará aqui
          }
        }
      }
    }
  }
}
console.log(sera) // e aqui também

// Exceto pelo ESCOPO de FUNÇÃO, o escopo de FUNÇÃO NÃO PODE SER ULTRAPASSO POR NINGUÉM, variáveis dentro de FUNÇÃO NÃO SÃO GLOBAIS
const CriarVariavel = () => {
  var nome = 'teste'
}

CriarVariavel()
//console.log(nome) // não conseguirá pegar o VALOR e gerará um erro, pois o escopo de função é INVENCIVEL, ninguém o ultrapassa
