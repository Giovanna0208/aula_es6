const symbol1 = Symbol();
const symbol2 = Symbol();
console.log('symbol1 é igual a symbol2:', symbol1 === symbol2);

//prevenir conflito entre nomes de propriedades
const name1 = Symbol('name');
const name2 = Symbol('name');

const user = {
    [name1]: 'Giovanna',
    [name2]: 'other name',
    lastname: 'Ramos'
};
console.log('user', user);

//symbols criam propriedades que não são enumberables 
for (const key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(`valor da chave ${key}: ${user[key]}`);
    }
};

console.log('propriedades do objeto user:', Object.keys(user));
console.log('valores das propriedades do objeto user:', Object.values(user));

//exibir symbols de um objeto
console.log('symbols registrados no objeto user:', Object.getOwnPropertySymbols(user));

//acessar todas propriedades do objeto
console.log('todas propriedades do objeto user:', Reflect.ownKeys(user));

//criar um enum 
const directions = {
    UP: Symbol( 'UP' ),
    DOWN: Symbol( 'DOWN' ),
    LEFT: Symbol( 'LEFT' ),
    RIGHT: Symbol( 'RIGHT' )
};