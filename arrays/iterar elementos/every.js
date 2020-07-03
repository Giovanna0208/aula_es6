//every retorna um booleano verificando 
//se todos os itens satisfazem a condição
const num = [1, 3, 5, 7, 9];
const every = num.every(values => values % 2 === 0);
const every2 = num.every(values => values <= 9);

console.log(every);
console.log(every2);


const students = [
    {
        nome: 'John',
        grade: 8 
    },
    {
        nome: 'Kim',
        grade: 3
    },
    {
        nome: 'Peter',
        grade: 5
    }
];

const everystudents = students.every(student => student.grade >= 5);
console.log(everystudents);