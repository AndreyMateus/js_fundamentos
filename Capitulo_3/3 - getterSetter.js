// OBS: Javascript não SUPORTA SOBRECARGA/OVERLOAD de MÉTODOS que NÃO SEJAM "GET" OU "SET"
const sequencia = {
    _valor: 1, // convenção para dizer que é uma variável PRIVATE
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        if(valor > this._valor){
            this._valor = valor
        }
    }
}
// ACESSANDO as propriedades através do GET
console.log(sequencia.valor)

// DEFININDO as propriedades através do SET
sequencia.valor = 100
console.log(sequencia.valor)

