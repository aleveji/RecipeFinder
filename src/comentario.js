class Comentario {
    constructor(idUsuario, idReceta, coment) {
        this.idUsuario = idUsuario; //identificador
        this.idReceta = idReceta; //titulo
        this.coment = coment; //comentario
    }

    get idUsuario() {
        return this.idUsuario;
    }

    set idUsuario(newIdUsuario) {
        this.idUsuario = newIdUsuario;
    }

    get idReceta() {
        return this.idReceta;
    }

    set idReceta(newIdReceta) {
        this.idReceta = newIdReceta;
    }

    get coment() {
        return this.coment;
    }

    set coment(newComent) {
        this.coment = newComent;
    }
}
