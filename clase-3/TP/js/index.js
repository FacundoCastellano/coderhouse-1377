var numeroA = parseInt (prompt('Ingrese un numero'));
var numeroB = parseInt (prompt('Ingrese otro numero'));
var operacion = prompt ('Ingrese la operacion a realizar (+, -, *, /)');

switch (operacion) {
    case ('+'):{
        sumar(numeroA, numeroB);
        break;}
    case ('-'):{
        restar(numeroA, numeroB);
        break;}
    case ('*'):{
        multiplicar(numeroA, numeroB);
        break;}
    case ('/'):{
        dividir(numeroA, numeroB);
        break;}
    default:
        alert("La operacion a realizar es invalida.");
}

function sumar(operandoA, operandoB) {
    console.log(operandoA + operandoB);
}
function restar(operandoA, operandoB) {
    console.log(operandoA - operandoB);
}
function multiplicar(operandoA, operandoB) {
    console.log(operandoA * operandoB);
}
function dividir(operandoA, operandoB) {
    console.log(operandoA / operandoB);
}
