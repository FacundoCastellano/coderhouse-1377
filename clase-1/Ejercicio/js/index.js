/**
 * Created by Facundo Castellano on 31/8/2016.
 */

//Pedir nombre mediante prompt y disparar un alert con algun texto mas
var nombre = prompt('Ingresar nombre');
alert('Tu nombre es: ' + nombre);

//Pedir un numero y sumarlo a otro que este en una variable
var numeroCualquiera = 2;
var numero = parseInt(prompt('Ingresar un numero'));

alert('Tu numero sumado a 2 es ' + (numero + numeroCualquiera));

//Pedir un numero y restarlo a otro que este en una variable
numeroCualquiera = 1;
numero = parseInt(prompt('Ingresar un numero'));

alert('Tu numero restado a 1 es ' + (numero - numeroCualquiera));

//Pedir un numero, luego otro y ambos sumarlos
numero = parseInt(prompt('Ingresar un numero'));
var otroNumero = parseInt(prompt('Ingresar otro numero'));

alert('La suma de tus numeros es igual a ' + (numero + otroNumero));