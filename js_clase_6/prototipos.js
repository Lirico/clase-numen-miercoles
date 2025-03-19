
/* PROTOTIPOS */
/*
    Todo tipo de dato en JS tiene un ancestro comun.
*/

// Constructores
// let cadena = new String("hola")

// let numero = new Number(32)

// const objeto = {}


// Cadenas -> Coleccions inmutables
// Arrays -> Colecciones mutables

// console.log(cadena)
// console.log(objeto)

// Insertar funcion via prototipo
// Number.prototype.reverse = function() {
//     return parseInt(this.toString().split("").reverse().join(""))
// }

// console.log(numero.reverse())



// THIS

// Ambito global
// this.nombre = "Bienvenidos al objeto window"

// Melanie/Ramiro/Victor -> Contexto del objeto 1


// Elevacion - Hoisting
// const objeto = {
//     nombre: "Contexto del objeto",
//     imprimir: function() {
//         console.log(this.nombre)
//     }
// }

// const objeto2 = {
//     nombre: 'Contexto del Objeto 2',
//     imprimir: objeto.imprimir
// }


// objeto2.imprimir()