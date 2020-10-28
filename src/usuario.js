require('receta.js');
require('comentario.js');

class Usuario {
    idsRecFav = []; //ids recetas favoritas

    constructor(id, nombre, apodo, mail) {
        this.id = id; //identificador
        this.nombre = nombre; //nombre
        this.apodo = apodo; //apodo
        this.mail = mail; //correo electronico
    }

    get id() {
        return this.id;
    }

    set id(newId){
        this.id = newId;
    }

    get nombre() {
        return this.nombre;
    }

    set nombre(newNombre){
        this.nombre = newNombre;
    }

    get apodo() {
        return this.apodo;
    }

    set apodo(newApodo) {
        this.apodo = newApodo;
    }

    get mail() {
        return this.mail;
    }
    
    set mail(newMail) {
        this.mail = newMail;
    }
    
    anadirRecetaFavorita(idReceta) { //metodo para marcar una receta como favorita
        this.idsRecFav.push(idReceta);
    }
    
    comentarReceta(idReceta, coment){ //metodo para anadir un comentario a una receta
        new Comentario(this.id, idReceta, coment);
    }
}