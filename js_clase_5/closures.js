/***** CLOSURE o cierres  *****/

/* 
    El closure es un mecanismo por el cual una funcion
    returna otra funcion que a su vez retorna algo.
*/

// Ambito global

// function saludar(saludo) {
//     // Ambito local 1
//     return function(nombre) {
//         // Ambito local 2
//         return `${saludo} ${nombre}`
//     }
// }

// // Funcion expresada
// const otroSaludo = saludar("Adios")

// console.log(otroSaludo("Johanna"))
// console.log(otroSaludo("Isaias"))
// console.log(otroSaludo("Victor"))


// El Dilema del Contador


const incrementar = () => {
    var contador = 0;

    return function() {
        return contador += 1
    }
}

const add = incrementar()

const manejarIncremento = () => {
    console.log(add())
}

