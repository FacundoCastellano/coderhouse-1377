function Auto(color, modelo, patente, marca, velocidadMaxima){

    this.color = color;
    this.modelo = modelo;
    this.patente = patente;
    this.marca = marca;
    this.velocidadMaxima = velocidadMaxima;
    this.velocidad = 0;
    this.prendido = false;

    this.encender = function () {
        if(!this.prendido) {
            this.prendido = true;
            console.log('Se encendio');
        }else
            console.log('El auto ya esta prendido');
    }

    this.acelerar = function (velocidad) {
        if(this.prendido){

            var velocidadAcelerada = this.velocidad + velocidad;
            if(velocidadAcelerada > this.velocidadMaxima)
                console.log('No puede acelerar a ' + velocidadAcelerada + '. Su velocidad maxima es ' + this.velocidadMaxima);
            else{
                this.velocidad += velocidad;
                console.log('Acelero');
            }

        }else
            console.log('El auto no esta prendido');
    }

    this.mostrarVelocidad = function () {
        if(this.prendido){
            console.log(this.velocidad);
            return this.velocidad;
        }else
            console.log('El auto no esta prendido');
    }

    this.frenar = function () {
        if(this.prendido) {
            if(this.velocidad === 0){
                console.log('Ya esta frenado');
            }else{
                this.velocidad = 0;
                console.log('Se freno');
            }
        }else
            console.log('El auto no esta prendido');
    }

    this.apagar = function () {
        if(this.prendido) {
            this.prendido = false;
            this.velocidad = 0;
            console.log('Se apago');
        }else{
            console.log('Ya estaba apagado');
        }
    }
}