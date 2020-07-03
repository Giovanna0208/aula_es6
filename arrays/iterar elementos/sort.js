//sort ordena os elementos de um array 
//de acordo com a condição
const num = [1, 2, 3, 9, 8, 7, 4, 6, 5]
const sort = num.sort();

console.log(sort);


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
        grade: 4
    }
];

const sortstudets = students.sort((current, next) => next.grade - current.grade);
console.log(sortstudets);