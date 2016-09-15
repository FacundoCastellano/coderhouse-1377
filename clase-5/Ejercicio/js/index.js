function Auto(patente, peso){

    this.patente = patente;
    this.peso = peso;

    this.getPeso = function () {
        return this.peso;
    }

    this.getPatente = function () {
        return this.patente;
    }

}

function Camion(pesoMaximo) {

    this.pesoMaximo = pesoMaximo;
    this.autosCargados = [];
    this.patentes = [];
    this.pesoActual = 0;

    this.getPatentes = function () {
        return this.patentes;
    }

    this.addAuto = function (auto) {

        if(this.sePuedeAgregar(auto)  && !this.estaEnElCamion(auto)){
            this.autosCargados.push(auto);
            this.patentes.push(auto.getPatente());
            this.pesoActual += auto.getPeso();
            console.log('Auto agregado');
        }
    }

    this.sePuedeAgregar = function (auto) {

        var pesoAlCargarAuto = this.pesoActual + auto.getPeso();
        if(pesoAlCargarAuto <= this.pesoMaximo)
            return true;
        else{
            console.log('No es posible agregar el auto. Sobrepasa el peso maximo de ' + this.pesoMaximo +
                '. Peso actual: ' + this.pesoActual + '. Peso del auto: ' + auto.getPeso());
            return false;
        }
    }

    this.estaEnElCamion = function (auto) {
        if(this.patentes.some(estaLaPatente, auto)){
            console.log('La patente ya se encuentra agregada');
            return true;
        }else
            return false;
    }
    
    function estaLaPatente(patente) {
        return patente === this.getPatente();
    }

}