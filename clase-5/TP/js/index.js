function Pelicula (id, titulo) {

    this.id = id;
    this.titulo = titulo;

    this.getId = function () {
        return this.id;
    }
    this.getTitulo = function () {
        return this.titulo;
    }
}

function Filmoteca(){

    this.peliculas = [];

    this.getPeliculas = function () {
        return this.peliculas;
    }

    this.addPelicula = function (pelicula) {

        //Si el objeto pelicula ya existe en la filmoteca, no la agrego
        if(this.peliculas.indexOf(pelicula) === -1){

            //Verifico que la pelicula a agregar no tenga un mismo id que otra pelicula ya agregada
            //Si no existe ese id en la lista, agrego la pelicula
            if(!this.peliculas.some(includeId, pelicula.getId())){

                this.peliculas.push(pelicula);
                console.log('Se agrego la pelicula: ' + pelicula.getTitulo());

            }else {
                console.log('Ya existe una pelicula con el id ' + pelicula.getId());
            }

        }else
            console.log('La pelicula ya se encuentra en la filmoteca');
    }

    this.removePelicula = function (id) {

        //Busco la pelicula con el id. Si me trae null, es porque no existe.
        var pelicula = getPeliculaById(id, this.peliculas);
        if(pelicula != null){
            //Busco la posicion del array donde se encuentra la pelicula
            var index = this.peliculas.indexOf(pelicula);
            //Elimino la pelicula de la lista a traves de la posicion
            this.peliculas.splice(index,1);
            console.log('La pelicula ' + pelicula.getTitulo() + ' ha sido removida')
        }else{
            console.log('La pelicula ingresada no existe en la filmoteca');
        }
    }

    this.sortPeliculas = function () {
        this.peliculas.sort(peliculaComparator);
        console.log('Se ordeno la lista de forma ascendente');
    }


    function getPeliculaById(id, peliculas) {
        var pelicula = null;
        for(var i in peliculas){
            if(peliculas[i].getId() === id){
                pelicula = peliculas[i];
                break;
            }
        }
        return pelicula;
    }

    function includeId(pelicula) {
        return pelicula.getId() === parseInt(this);
    }
    
    function peliculaComparator(pelicula, otraPelicula) {

        //Ordena las peliculas por sus titulos, de forma ascendente
        if(pelicula.getTitulo() < otraPelicula.getTitulo())
            return -1;
        if(pelicula.getTitulo() > otraPelicula.getTitulo())
            return 1;
        //Si llega hasta aca, los titulos son iguales. Ordeno por id de forma ascendente
        if(pelicula.getId() < otraPelicula.getId())
            return -1;
        if(pelicula.getId() > otraPelicula.getId())
            return 1;

        return 0;
    }
}