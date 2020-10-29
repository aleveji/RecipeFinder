class Receta {
    notas = []; //notas receta
    nota = 0; //nota media receta

    constructor(id, titulo, descr, ingr, prep) {
        this.id = id; //identificador
        this.titulo = titulo; //titulo
        this.descr = descr; //descripcion
        this.ingr = ingr; //ingredientes
        this.prep = prep; //preparacion
    }
    
    getId() {
        return this.id;
    }

    setId(newId){
        this.id = newId;
    }

    getTitulo() {
        return this.titulo;
    }

    setTitulo(newTitulo){
        this.titulo = newTitulo;
    }

    getDescr() {
        return this.descr;
    }

    setDescr(newDescr){
        this.descr = newDescr;
    }

    getIngr() {
        return this.ingr;
    }

    setIngr(newIngr){
        this.ingr = newIngr;
    }

    getPrep() {
        return this.prep;
    }

    setPrep(newPrep){
        this.prep = newPrep;
    }

    getNota() {
        return this.nota;
    }

    setNota(newNota){
        this.nota = newNota;
    }

    notaMedia() {
        var suma = 0;
        for (let i=0; i<this.notas.length; i++) {
            suma += this.notas[i];
        }
        this.nota = (suma/this.notas.length);
    }

    valorarReceta(newNota) { //metodo para valorar una receta
        this.notas.push(newNota);
        this.notaMedia();
    }

    aString() {
        return "Receta " + this.id + " [Titulo: " + this.titulo + ", Descrip: " + this.descr +
               ", Ingr: (" + this.ingr + "), Prep: " + this.prep + ", Nota media: " + this.nota + "]";
    }
}

module.exports.Receta = Receta;
