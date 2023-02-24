//1. ------------------------------------------------------------------
let amor = 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor';
let patron = /amor/gi;
let cuentaAmor = amor.match(patron);
console.log(cuentaAmor.length);

//2. ------------------------------------------------------------------
let porque = 'No puede terminar una oración con porque porque porque es una conjunción';
patron = /porque/gi;
let cuentaPorque = porque.match(patron);
console.log(cuentaPorque.length);

//3. ------------------------------------------------------------------
let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
patron = /[^a-zA-Z0-9 ]/g;
sentence = sentence.replace(patron,'');
let array = sentence.split(' ');
let maxCantidad = 0;
let moda;
array.forEach(element => {
    let cantidad = devolverCantidad(element);
    if(cantidad > maxCantidad){
        maxCantidad = cantidad;
        moda = element;
    }
});
console.log(moda);

function devolverCantidad(element) {
    let regEx = new RegExp(element, 'g');
    let cantidad = sentence.match(regEx);
    return cantidad.length;
}

//console.log();
//4. ------------------------------------------------------------------
let sueldo = 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.';
patron = /[a-zA-Z ]/g;
sueldo = sueldo.replace(patron,'');
patron = /[^a-zA-Z0-9]/g;
let arraySueldo = sueldo.split(patron);
let montos = [];
arraySueldo.forEach(element => {
    if(element !== ''){
        montos.push(element);
    }
});
let resultado = (parseInt(montos[0]) * 12) + parseInt(montos[1]) + (parseInt(montos[2]) * 12);
console.log(`El ingreso anual total es: ${resultado}`);