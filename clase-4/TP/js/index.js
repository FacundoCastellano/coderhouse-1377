function Pelicula (id, titulo, descripcion, año, duracion, director) {

    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.año = año;
    this.duracion = duracion;
    this.actores = [];
    this.director = director;

    this.setTitulo = function (titulo) {
        this.titulo = titulo;
    }
    this.setDescripcion = function (descripcion) {
        this.descripcion = descripcion;
    }
    this.setAño = function (año) {
        this.año = año;
    }
    this.setDuracion = function (duracion) {
        this.duracion = duracion;
    }
    this.setDirector = function (director) {
        this.director = director;
    }
    this.agregarActor = function (actor) {
        this.actores.push(actor);
    }

}