/**
 * Created by Facundo Castellano on 5/9/2016.
 */

//Declaro los dias de semana como un array de strings
var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado","Domingo"];
var dia;
for(var i in dias) {

    dia = dias[i];
    switch(dia){
        case "Sábado":
            alert("Hoy es sabado!");
            break;
        case "Domingo":
            alert("Hoy es domingo!");
            break;
        default:
            alert("Hoy es dia de semana :(");
            break;
    }
}