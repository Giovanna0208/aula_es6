this.name = 'nome do contexto de criação';

const getnamearrowfn = () => this.name;

function getname() {
    return this.name;
};

const user = {
    name: 'nome do objeto de execução',
    getnamearrowfn,
    getname
}

//o this referencia ao escopo de criação em uma arrow function

console.log('user arrow function:', user.getnamearrowfn());
console.log('user função normal:', user.getname());
