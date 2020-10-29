class Comentario {
    constructor(idUsuario, idReceta, coment) {
        this.idUsuario = idUsuario; //identificador
        this.idReceta = idReceta; //titulo
        this.coment = coment; //comentario
    }

    getIdUsuario() {
        return this.idUsuario;
    }

    setIdUsuario(newIdUsuario) {
        this.idUsuario = newIdUsuario;
    }

    getIdReceta() {
        return this.idReceta;
    }

    setIdReceta(newIdReceta) {
        this.idReceta = newIdReceta;
    }

    getComent() {
        return this.coment;
    }

    setComent(newComent) {
        this.coment = newComent;
    }

    aString() {
        return "Comentario [Id. usuario: " + this.idUsuario + ", Id. Receta: " + this.idReceta + ", Texto coment: " + this.coment + "]";
    }
}

module.exports.Comentario = Comentario;