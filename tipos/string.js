//retorna o tamanho de uma string
const textsize = 'texto'.length;
console.log(`quantidade de letras: ${textsize}`);

//retorna array quebrando a string  
const splittedtext = 'texto'.split('x');
console.log('array com as posições separadas pelo delimitador:', splittedtext);

//substitui o valor
const replacedtext = 'texto'.replace('text', 'txet');
console.log('substituição de valor:', replacedtext);

// retorna 'fatia' de valor
const lastchar = 'texto'.slice(-1);
console.log('ultima letra de uma sring:', lastchar);

const allwithoutlastchar = 'texto'.slice(0, -1);
console.log('valor da string menos a ultima:', allwithoutlastchar);

const secondtoend = 'texto'.slice(1);
console.log('valor da string da segunda até a ultima:', secondtoend);

//retorna n caracteres a partir de uma posição
//os parâmetros são (começo, número de caracteres)
const twocharsbeforefirst = 'texto'.substr(0, 2);
console.log('as duas primeiras letras são:', twocharsbeforefirst);