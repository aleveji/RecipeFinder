var assert = require('assert');
var receta = require('../src/receta');
var usuario = require('../src/usuario');
//var comentario = require('../src/comentario');

var newReceta = new receta.Receta(1, "Huevo frito", "Receta sencilla sobre como preparar un huevo frito", ["Huevo", "Aceite", "Sal"], "Echar el huevo en la sarten cuando el aceite este caliente"); //creacion nueva receta
var newUsuario = new usuario.Usuario(1, "Juan", "juanito123", "juanito@correo.com"); //creacion nuevo usuario
//var newComentario = new comentario.Comentario(newUsuario.getId(), newReceta.getId(), "Receta sencilla pero exquisita");
var newComentario = newUsuario.comentarReceta(newReceta.getId(), "Receta sencilla pero exquisita"); //usuario comenta receta

describe('Receta', function() {
    describe('Creacion', function() {
        it('Receta creada correctamente', function(){
            assert.strictEqual(newReceta.aString(), "Receta 1 [Titulo: Huevo frito, Descrip: Receta sencilla sobre como preparar un huevo frito, Ingr: (Huevo,Aceite,Sal), Prep: Echar el huevo en la sarten cuando el aceite este caliente, Nota media: 0]", "Creado");
        });
    });

    describe('Valoracion receta', function() {
        it('Receta valorada correctamente', function(){
            newReceta.valorarReceta(4.5); //valoracion receta
            assert.strictEqual(newReceta.getNota(), 4.5, "Valorada");
        });
    });
});

describe('Usuario', function() {
    describe('Creacion', function() {
        it('Usuario creado correctamente', function(){
            assert.strictEqual(newUsuario.aString(), "Usuario 1 [Nombre: Juan, Apodo: juanito123, Mail: juanito@correo.com]", "Creado");
        });
    });

    describe('Marca receta favorita', function() {
        it('Receta marcada correctamente', function(){
            newUsuario.anadirRecetaFavorita(newReceta.getId()); //usuario marca receta como favorita
            assert.strictEqual(newUsuario.getIdsRecFav().toString(), "1", "Marcada");
        });
    });
});

describe('Comentario', function() {
    describe('Creacion', function() {
        it('Comentario creado correctamente', function(){
            assert.strictEqual(newComentario.aString(), "Comentario [Id. usuario: 1, Id. Receta: 1, Texto coment: Receta sencilla pero exquisita]", "Creado");
        });
    });
});