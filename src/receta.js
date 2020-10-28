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
    
    get id() {
        return this.id;
    }

    set id(newId){
        this.id = newId;
    }

    get titulo() {
        return this.titulo;
    }

    set titulo(newTitulo){
        this.titulo = newTitulo;
    }

    get descr() {
        return this.descr;
    }

    set descr(newDescr){
        this.descr = newDescr;
    }

    get ingr() {
        return this.ingr;
    }

    set ingr(newIngr){
        this.ingr = newIngr;
    }

    get prep() {
        return this.prep;
    }

    set prep(newPrep){
        this.prep = newPrep;
    }

    get nota() {
        return this.nota;
    }

    set nota(newNota){
        this.nota = newNota;
    }

    notaMedia() {
        suma = 0;
        for (x in notas) {
            suma += x;
        }
        nota(suma/this.notas.length);
    }

    valorarReceta(newNota) { //metodo para valorar una receta
        this.notas.push(newNota);
        notaMedia();
    }
}
