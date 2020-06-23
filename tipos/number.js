const number = 12.345;

//número => string
const numberstring = number.toString();
console.log('número transformado em string:', numberstring, typeof numberstring);

//número com quanidade de casas decimais
const twodecimals = number.toFixed(2);
console.log('número com 2 casas decimais:', twodecimals);

//srting => float
console.log('string parseada para float:', parseFloat('13.22'));

// string => int
console.log('string parseada para int', parseInt('13.22'));