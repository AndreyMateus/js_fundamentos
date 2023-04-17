const pessoa = {
  saudacao: 'Bom dia !',
  falar() {
    console.log(this.saudacao)
  },
}

// Invocando através do OBJETO
pessoa.falar()

// Aqui o THIS dentro do MÉTODO falar REFERÊNCIARÁ a VARIÁVEL que o RECEBE
const novaPessoa = pessoa.falar
// Logo quando executarmos o THIS vai na VARIÁVEL FALAR e procurará pela PROPRIEDADE 'SAUDACAO', ao ver que ela não existe aqui, será retornado UNDEFINED
novaPessoa()

// Usando o BIND
// o BIND faz com que o THIS vá referênciar a PROPRIEDADE de DENTRO do OBJETO passado no método BIND
// o BIND liga O MÉTODO ao OBJETO que é passado e o VALOR das PROPRIEDADES desse OBJETO, o BIND é o STATIC no C#
const falarDePessoa = pessoa.falar.bind(pessoa)
// assim quando executarmos o falarDePessoa, o BIND vai passar a REFERÊNCIA DO OBJETO 'PESSOA' para o método 'FALAR', assim ele vai lá em 'PESSOA' e buscará qualquer PROPRIEDADE REFERÊNCIADA pelo THIS
falarDePessoa()
