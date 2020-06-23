const users = ['Giovanna', 'Pedro', 'Jennifer'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
};

const persons = [
    {
        name: 'Giovanna',
        age: 17,
        gender: gender.WOMAN
    },
    {
        name: 'Pedro',
        age: 24,
        gender: gender.MAN
    },
    {
        name: 'Jennifer',
        age: 26,
        gender: gender.WOMAN
    }
];

//quantidade de itens
console.log('quantidade de itens:', persons.length);

//verifica se é array
console.log('a variável persons é um array:', Array.isArray(persons));

//iterar itens do array
persons.forEach((person, index) => {
    console.log(`nome: ${person.name} index: ${index}`);
});

//filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('lista apenas com homens:', mens);

//retornar um novo 
const personswithcourse = persons.map(person =>{
    person.course = 'introdução ao javascript';
    return person;
});

console.log('pessoas com adição do course:', personswithcourse);

//transformar array em outro tipo
const totalage = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log(`soma da idade das pessoas: ${totalage}`); 

//juntando operações
const totalevenages = persons
                            .filter(person => person.age % 2 === 0)
                            .reduce((age, person) => {
                                age += person.age;
                                return age;
                            }, 0);

console.log(`soma de idades das pessoas que possuem idade par: ${totalevenages}`);
