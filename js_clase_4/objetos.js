// Los objetos tienen como objetivo representar algo de la realidad o de la fantasia.
// Se pueden representar tanto carcateristicas como acciones.

/* 
    Propiedades:
    - Color
    - Cantidad de puertas
    - Marca

    Acciones:
    - Frenar
    - Acelerar
    - Encender
    - Tocar bocina
*/

// const detective = {
//   nombre: "Sherlock Holmes",
//   edad: 60,
//   intereses: ["Investigar", "Fumar", "Tocar el violin"],
//   vestimenta: {
//     sombrero: "Galera",
//     zapatos: "Ricky Sarkany",
//     pipa: "Higuain"
//   },
//   decirFrase: function() {
//     return "Elemental mi querido Watson!"
//   }
// };
// Dotwalking
// console.log(detective.vestimenta.zapatos)

// Bracket notation
// const insertarPropiedad = (nombre, valor) => {
//     detective[nombre] = valor;
// }

// insertarPropiedad("hobbie", "Darle al opio")

// console.log(detective)

// const eliminarPropiedad = (objeto, propiedad) => {
//     delete objeto[propiedad]
// }

// eliminarPropiedad(detective, "edad")
// eliminarPropiedad(auto, "marca")

// console.log(detective)

// console.log(detective.decirFrase())

// const productos = [
//     {id: 1, name: "Xayah", price: "10"},
//     {id: 2, name: "Garen", price: "20"},
//     {id: 3, name: "Twitch", price: "30"},
//     {id: 4, name: "Yasuo", price: "40"},
//     {id: 5, name: "Nasus", price: "50"}
// ]

// const crearTarjetas = (listaProductos) => {
//     for (let producto = 0; producto < listaProductos.length; producto++) {
//         console.log(`
//              ${listaProductos[producto].name}
//               ${listaProductos[producto].price}
//              - 0 +
//             AGREGAR        
//         `)
//     }
// }

// crearTarjetas(productos)
