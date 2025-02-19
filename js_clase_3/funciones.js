


// Scope

// Ambito
// Alcance

// 2015 -> EcmaScript 6 -> ES6
// let -> permitir
// const -> constante

// Ambito global -> La calle
// const animal = "perro"

// function imprimir() {
//     // Ambito local -> La casa
//     const animal = "gato"
// }

// // animal = "ave"
// // console.log(animal)

// imprimir()


// const realizarIntegral = function(){
//     // 50 INSTRUCCIONES
// }

// realizarIntegral = "Juan carlos"

// console.log(realizarIntegral)

// Tipos de bloques algoritmicos

// Funciones
// function sumar(a, b) {
//     return a + b
// }
// // Procedimientos
// function insertarTexto(){
//     const $p = document.querySelector('p');

//     $p.textContent = "Hola juan carlos"
// }

// Metodos -> es un tipo de bloque que para se
// ejecuta a travez de algun tipo de dato.
// let cadena = "Me gusta el pan con queso"

// console.log(cadena.toUpperCase())


// 3 Tipos de funciones

// Funcion declarada
// function imprimir() {
//     console.log("Hola")
// }

// imprimir()

// Funcion expresada
// const reprimir = function() {
//     console.log("Reprimiendo")
// }

// reprimir()

// Funcion flecha (arrow function)
const sumar = a => a + 4

console.log(sumar(4))



// Orden estructural de una hoja de JS

// 1 -> Importaciones de modulos
// 2 -> Declaro variables globales
// 3 -> Declaracion de funciones
// 4 -> Invocaciones de las funciones