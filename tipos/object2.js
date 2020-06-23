const user = {
    name: 'Giovanna',
    lastname: 'Ramos'
};

//chaves do objeto
console.log('propriedades do objeto user:', Object.keys(user));

//valores das chaves do objeto
console.log('valores das propriedades do objeto user:', Object.values(user));

//array de arrays contendo [nome_prop, valor_prop]
console.log('lista de propriedades e valores:', Object.entries(user));

//mergear propriedades de objetos
console.log('adiciona a propriedade fullname no objeto user', Object.assign(user, {fullname: 'Giovanna Ramos'}));
console.log('retorna un novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age: 17}));
console.log(user)

//previne todas as alterações do objeto
const newobj = { foo: 'bar' };
Object.freeze(newobj);

newobj.foo = 'changes';
delete newobj.foo;
newobj.bar = 'foo';

console.log('variável newobj após as alterações:', newobj);

//permite apenas a alteração de propriedades existentes no objeto
const person = { name: 'Giovanna' };
Object.seal(person);

person.name = 'Giovanna Ramos';
delete person.name;
person.age = 26;

console.log('variável person após alterações:', person);