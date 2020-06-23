// AND (&&)
exp1 && exp2
var a = true && true; //retorna true
var b = true && false; //retorna false
var c = false && true; //retorna false
var d = false && false; //retorna false
var e = 'gato' && 'cão'; //retorna cão
var f = false && 'gato'; // retorna false
var g = 'gato' && false; //retorna false

// OU (||)
exp1 || exp2
a = true || true; //retorna true
b = false || true; //retorna true
c = true || false; //retorna true
d = 'gato' || 'cão'; //retorna gato
e = false || 'gato'; //retorna gato
f = 'gato' || false; //retorna gato

//NOT (!)
!exp1
a = !true; //retorna false
b = !false; //retorna true
c = !'gato'; //retorna false
d = !''; //retorna true
e = !1; //retorna false
f = !0; //retorna true