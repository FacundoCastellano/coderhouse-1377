/**
 * Created by Facundo Castellano on 5/9/2016.
 */

//Declaro los dias de semana como un array de strings
var semana = ["lunes", "martes", "miercoles", "jueves", "viernes","sabado","domingo"];
var esUnDia = false;

var dia = prompt("Ingrese dia").toLowerCase();

for(var index in semana){

    if(dia === semana[index]){
        esUnDia=true;
        if(dia === 'sabado' || dia ==='domingo'){
            alert('El dia no es habil!');
        }else{
            alert('el dia es habil"');
        }
        break;
    }
}
if(!esUnDia)
    alert('El dia ingresado es incorrecto');
