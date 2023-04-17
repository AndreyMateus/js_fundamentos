// Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = '0'

const avo = { attr1 : 'A' }

const pai = { __proto__: avo, attr2: 'B' }

const filho = { __proto__: pai, attr3: 'C'}

console.log(filho.attr0,filho.attr1, filho.attr2, filho.attr3)

//----------------------------------------------------------

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velMax += delta
        } else {
            this.velAtual += delta
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h `
    }
}

const ferrari ={
    modelo: 'F40',
    velMax: 324 // shadowing/sobreamento
}

const volvo = {
    modelo: 'V40',
    status(){
    return `${this.modelo}: ${super.status()}`
    }
}

// Criando uma relação de PAI e FILHO entre ferrari e carro
Object.setPrototypeOf(ferrari, carro)
// Criando uma relação de PAI e FILHO entre volvo e carro
Object.setPrototypeOf(volvo,carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())

