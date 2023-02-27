export class Films{
    private nombre: string;
    private director: string;
    private protagonista: string;
    private año: number;
    private premios: boolean;
    private minutosDuracion: number;

    constructor(nombre: string,director: string, protagonista:string, año:any, premios:boolean, minutosDuracion:number){
     this.nombre = nombre;
     this.director = director;
     this.protagonista = protagonista; 
     this.año= año    
     this.premios = premios;
     this.minutosDuracion = minutosDuracion;
  } 
}
export class GestorFilms{
  todo(array){
    console.log('Films:', array);
}
insertar (film: Films, array: Films[]){
    array.push(film);
    console.log(array);
}
consultar (nombre:string, array: Films []){
    let filmEncontrado = array.find (film => nombre === nombre );
    console.log(filmEncontrado);
    return filmEncontrado
}
eliminar(nombre:string, array: Films []) {
    let filmEliminado = array.filter (film => nombre != nombre)
    if (filmEliminado){
        console.log ("El film" , nombre, "fue eliminado")
        return  array = filmEliminado
    }else {
        console.log ("Ese film no existe en la lista");
    }
}}

let wiplash = new Films ("Wiplash", "Damien Chazelle", "Miles Teller", 2014, true, 107 )
let smoke = new Films ("Smoke", "Wayne Wang", "Harvey Keytel and William Hurt", 1995, false, 112 )
let licoricePizza = new Films ("Licorice Pizza", "Paul Thomas Anderson", "Alana Haim and Cooper Alexander", 2021, true, 133)

let gestor = new GestorFilms;
let filmoteca = [wiplash, smoke, licoricePizza];
let pulpFiction = new Films ("Pulp Fiction", "Quentin Tarantino", "Uma Thurman", 1993, true, 120) 

gestor.insertar(pulpFiction, filmoteca)
gestor.todo(filmoteca)