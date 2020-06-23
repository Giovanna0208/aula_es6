//in 
something in somethingitems

//array
var arvores = new Array('pau-Brasil', 'loureiro', 'cedro', 'carvalho', 'sicômoro');
0 in arvores; //retorna true
3 in arvores; //retorna true
6 in arvores; //retorna false
'cedro' in arvores; //retorna false (expecificar o número do índice
                    //não o valor)
'lenght' in arvores; // retorna true (lenght é propriedade de array)

//predefinidos
'PI' in Math; //retorna true
var minhastring = new String('coral');
console.log('lenght' in minhastring); //retorna true

//personalizados
var meucarro = {marca: 'Honda', modelo: 'Accord', ano: 1998};
console.log('marca' in meucarro); //retorna true
console.log('modelo' in meucarro); //retorna true 

//instaceof
objeto instanceof tipoobjeto
var dia = new Date(2020, 06, 22);
if (dia instanceof Date) {
    //code here
}