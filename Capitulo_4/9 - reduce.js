// o reduce serve para você TRANSFORMAR um array em um ELEMENTO com base no CRITÉRIO
// OBS: o resultado do REDUCE sempre é passado para o próximo método da PIPELINE

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

// gerando um novo array com base no critério
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0 )

console.log(resultado)



