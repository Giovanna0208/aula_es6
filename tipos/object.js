let user = {
    name: 'Giovanna'
};
console.log(user)

//mudar a propriedade do objeto
user.name = 'other name 1';
console.log(user)

user['name'] = 'other name 2';
console.log(user)

const prop = 'name';
user[prop] = 'other name 3';
console.log(user)

//criar propriedade
user.lastname = 'Ramos';
console.log(user)

//deletar propriedade
delete user.name;
console.log(user)