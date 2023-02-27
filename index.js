"use strict";
exports.__esModule = true;
exports.GestorFilms = exports.Films = void 0;
var Films = /** @class */ (function () {
    function Films(nombre, director, protagonista, año, premios, minutosDuracion) {
        this.nombre = nombre;
        this.director = director;
        this.protagonista = protagonista;
        this.año = año;
        this.premios = premios;
        this.minutosDuracion = minutosDuracion;
    }
    return Films;
}());
exports.Films = Films;
var GestorFilms = /** @class */ (function () {
    function GestorFilms() {
    }
    GestorFilms.prototype.todo = function (array) {
        console.log('Films:', array);
    };
    GestorFilms.prototype.insertar = function (film, array) {
        array.push(film);
        console.log(array);
    };
    GestorFilms.prototype.consultar = function (nombre, array) {
        var filmEncontrado = array.find(function (film) { return nombre === nombre; });
        console.log(filmEncontrado);
        return filmEncontrado;
    };
    GestorFilms.prototype.eliminar = function (nombre, array) {
        var filmEliminado = array.filter(function (film) { return nombre != nombre; });
        if (filmEliminado) {
            console.log("El film", nombre, "fue eliminado");
            return array = filmEliminado;
        }
        else {
            console.log("Ese film no existe en la lista");
        }
    };
    return GestorFilms;
}());
exports.GestorFilms = GestorFilms;
var wiplash = new Films("Wiplash", "Damien Chazelle", "Miles Teller", 2014, true, 107);
var smoke = new Films("Smoke", "Wayne Wang", "Harvey Keytel and William Hurt", 1995, false, 112);
var licoricePizza = new Films("Licorice Pizza", "Paul Thomas Anderson", "Alana Haim and Cooper Alexander", 2021, true, 133);
var gestor = new GestorFilms;
var filmoteca = [wiplash, smoke, licoricePizza];
var pulpFiction = new Films("Pulp Fiction", "Quentin Tarantino", "Uma Thurman", 1993, true, 120);
gestor.insertar(pulpFiction, filmoteca);
gestor.todo(filmoteca);
