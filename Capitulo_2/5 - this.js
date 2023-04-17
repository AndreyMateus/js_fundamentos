// OBS: o THIS vária de acordo com o ESCOPO/CONTEXTO onde a FUNÇÃO foi criada,Então se criarmos uma FUNÇÃO ARROW em um CONTEXTO/ESCOPO GLOBAL, ela apontará para o ESCOPO de ONDE ela foi CRIADA, ela continuará apontando para lá independente de onde for executada, porém se for com uma FUNCTION LITERAL, isso vai VARIAR de acordo com que CHAMA a FUNÇÃO

// LITERAL - Com a FUNCTION LITERAL, o THIS VARIA, de acordo com quem o CHAMA.

// ARROW - Com a ARROW FUNCTION o THIS NÃO VARIA, com a ARROW FUNCTION o THIS é DEFINIDO no momento em que a FUNÇÃO FOR DEFINIDA.

const pessoa = {
    nome: "Maria",

    //literal
    DizNome() {
        console.log(`Meu nome é ${this.nome}`)
    },

    // arrow
    dizNome: () => {
        console.log(`Meu nome é ${this.nome}`);
    },
}

const pessoa3 = {
    nome: "andrey",
}

// retorna uma nova FUNÇÃO tendo o OBJETO passado como THIS, como se a função fizesse parte do OBJETO passado.
const result = pessoa.DizNome.bind(pessoa3)
result()


