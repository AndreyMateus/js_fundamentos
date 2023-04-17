const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

// Retornando o novo array com os valores fitrados
const filtrados = produtos.filter(function(p){
    return p.preco > 1500 && p.fragil === true
})
console.log(filtrados)

// Retornando o novo array com os valores fitrados, mas com a arrow function
const filtradosArrow = produtos.filter(p => p.nome.includes('Copo'))
console.log(filtradosArrow)

// ou podemos fazer dessa maneira também
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil // retornará TRUE se o frágil do produto for TRUE

console.log(produtos.filter(caro).filter(fragil))