

/* 
    FUNCIONES DE ORDEN SUPERIOR - FUNCIONES CALLBACK

    Son funciones que reciben por parametro otra funcion.
*/

// const frutas = ["Mora", "Frutilla", "Pera", "Banana"]

// console.log(frutas.filter((fruta) => fruta.length === 4))

// function filtrar(array, condicion){
//     const elemFiltrados = []

//     for(let i = 0; i < array.length; i++){
//         if(condicion(array[i])){
//             elemFiltrados.push(array[i])
//         }
//     }

//     return elemFiltrados
// }

// console.log(filtrar(frutas, (fruta) => fruta.length < 4))

// filter -> Filtra elementos de un array y devuelve un array nuevo con los elem. filtrados
// find -> Filtra 1 solo elemento de un array y lo devuelve
// forEach -> Recorre un arreglo y ejecuta instrucciones (Callback -> Procedimiento) No retorna NADA
// map -> Recorre un arreglo, ejecuta instrucciones y devuelve un nuevo arreglo
// reduce -> Opera sobre todos los elementos de un arreglo y devuelve un resultado de la operacion de todos ellos.

// const frutas = ["Mora", "Frutilla", "Pera", "Banana"]

// console.log(frutas.find((fruta) => fruta.length === 4))

// console.log(frutas.forEach(fruta => console.log(fruta)))

// console.log(frutas.map(fruta => fruta + " podrida"))

// const numeros = [1,2,3,4,5,6,7]

// console.log(frutas.reduce((acumulador, fruta) => {
//     if(acumulador.length === 0){
//         return acumulador + fruta
//     } else {
//         return  acumulador + " " + fruta
//     }
// }, ""))

const products = [
    {id: 1, name: "Producto A", price: 10},
    {id: 2, name: "Producto B", price: 20},
    {id: 3, name: "Producto C", price: 30},
    {id: 4, name: "Producto D", price: 40}
]

function addToCart(id){
    const newItem = products.find(product => product.id == id)

    console.log(newItem)
}