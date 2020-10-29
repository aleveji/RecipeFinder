var comentario = require('./comentario');

class Usuario {
    idsRecFav = []; //ids recetas favoritas

    constructor(id, nombre, apodo, mail) {
        this.id = id; //identificador
        this.nombre = nombre; //nombre
        this.apodo = apodo; //apodo
        this.mail = mail; //correo electronico
    }

    getId() {
        return this.id;
    }

    setId(newId){
        this.id = newId;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(newNombre){
        this.nombre = newNombre;
    }

    getApodo() {
        return this.apodo;
    }

    setApodo(newApodo) {
        this.apodo = newApodo;
    }

    getMail() {
        return this.mail;
    }
    
    setMail(newMail) {
        this.mail = newMail;
    }

    getIdsRecFav() {
        return this.idsRecFav;
    }
    
    anadirRecetaFavorita(idReceta) { //metodo para marcar una receta como favorita
        this.idsRecFav.push(idReceta);
    }
    
    comentarReceta(idReceta, coment){ //metodo para anadir un comentario a una receta
        return new comentario.Comentario(this.id, idReceta, coment);
    }

    aString() {
        return "Usuario " + this.id + " [Nombre: " + this.nombre + ", Apodo: " + this.apodo + ", Mail: " + this.mail + "]";
    }
}

module.exports.Usuario = Usuario;
