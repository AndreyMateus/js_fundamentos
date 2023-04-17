// a Classe nada mais é que uma FUNÇÃO em JS
// OBS: Continua sendo HERANÇA POR PROTOTYPE, só que escrito de OUTRA FORMA
class Lancamento{
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}
const salario = new Lancamento('Salario',45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro()
contas.addLancamentos(salario)
contas.addLancamentos(contaDeLuz)

const resultado = contas.sumario()
console.log(resultado)



