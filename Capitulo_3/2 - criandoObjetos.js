// usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object())
const obj2 = new Object()
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome

    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

// Armazenando os OBJETOS GERADOS nas variáveis
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(),p2.getPrecoComDesconto())

// Função Factory - Factory é um padrão de projeto, onde uma função sempre cria e retorna algo.
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        // Um método de um objeto aponta para si mesmo, ou seja: as intâncias dessa função, apontarão para elas próprias.
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const funcionario = criarFuncionario('Andrey', 1200, 4)

console.log('Obj ->',funcionario,'Salario ->',funcionario.getSalario())


// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)
