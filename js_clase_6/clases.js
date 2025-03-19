/* CLASES */
/* 
    Plantillas que creamos para generar instancias con diferentes datos.
    A travez de ellas generamos nuevos objetos que comparten las mismas propiedades
    pero diferentes valores.
*/
// Las clases tiene capacidad hereditaria.

class Persona {
    constructor(nombre, brazos, piernas, frase){
        this.nombre = nombre;
        this.brazos = brazos;
        this.piernas = piernas;
        this.frase = frase;
    }

    decirFrase(){
        return this.frase;
    }
}

class Empleado extends Persona {
    constructor(nombre, brazos, piernas, frase, salario, aguinaldo){
        super(nombre, brazos, piernas, frase)
        this.salario = salario;
        this.aguinaldo = aguinaldo;
    }
    decirFrase(){
        return this.frase;
    }
}

class Piquetero extends Persona {
    constructor(nombre, brazos, piernas, frase, palos, gomas){
        super(nombre, brazos, piernas, frase)
        this.palos = palos;
        this.gomas = gomas;
    }
    decirFrase(){
        return this.frase;
    }
}

const carolina = new Persona("Carolina", 2, 2, "Tomemos unos mates!")

const melanie = new Empleado("Melanie", 2, 2, "No se, me mataste!", 1000000, 500000);

const isaias = new Piquetero("Isaias", 2, 2, "Vamo' a quemar todo!", 1, 25)

console.log(melanie.decirFrase())
console.log(isaias.decirFrase())