// JSON é formato de DADOS mais usado que possui ALTA interoperabilidade
// OBS: Json não é EXECUTADO, são apenas DADOS que estão TRAFEGANDO, então somente TEXTOS serão ARMAZENADOS, funções serão EXCLUIDAS

// criando um OBJETO
const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
        return a + b + c
    }
}
//  convertendo o OBJETO em JSON
console.log(JSON.stringify(obj))

// convertendo o JSON para OBJETO
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}'))

// Tudo tem que estar DENTRO de ASPAR DUPLAS, MENOS os TIPOS NÚMERICOS
console.log(JSON.parse('{"a": 1, "b": "string", "c": "true", "d": "{}", "e": "[]"}') )

