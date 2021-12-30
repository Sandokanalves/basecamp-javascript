function calcularIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}

const pessoa1 = {
        nome:'Amelia',
        idade:23,
}


const pessoa2 = {
    nome:'Maria',
    idade:20,
}
const pessoa3 = {
    nome:'Jonas',
    idade:13,
}

console.log(calcularIdade.call(pessoa3, 40));
console.log(calcularIdade.apply(pessoa2,[20]));