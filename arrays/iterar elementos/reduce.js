//reduce retorna um novo tipo de dado 
//iterando cada posição de um array
const num = [1, 2, 3, 4, 5, 6, 7];
const num1 = num.reduce((total, value) => total -= value, 0);
console.log(reduce);

const num2 = num.reduce((total, value) => total += value * 2 + ' ', []);
console.log(reduce2);


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

const media = students.reduce((totalgrates, student) => totalgrates += student.grade, 0) / students.length;
console.log(media);

const nomes = students.reduce((names, student) => names += student.nome + ' ', '');
console.log(nomes);