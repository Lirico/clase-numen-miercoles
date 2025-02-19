

/******** FOR LOOP *******/

// let index = 0;

// while(index < 10){
//     console.log(index)
//     index++
// }

// 0 1 2 3 4 5 6 7 8 9

// for(let index = 0; index < 10; index++){

// }

/* 
    El zorro pepe debe ir al bosque a recolectar 
    algunas manzanas para su familia. Para ello
    lleva una canasta que tiene una capacidad 
    maxima de 10 manzanas.
    Pepe ira recogiendo una manzana a la vez hasta
    llenar la canasta y luego volvera a su casa.
*/

// let canasta = 0;

// for(let manzanas = 1; manzanas <= 10; manzanas++){
//     canasta = canasta + 1
// }

/* 
    Flor se encuentra dentro de un hospital abandonado en medio de un apocalipsis zombie. El hospital
    sufrio un corte de luz permanente y Flor esta intentando encontrar suministros. Flor esta armada
    con una pistola y una linterna. Esta por intentar ingresar a una habitacion y sabe que es posible
    que encuentre zombies. Al abrir la puera, para su infortunio, encuentra 10 zombies dentro.
    La cantidad de balas que tiene Flor en la recamara es aleatoria en cada ejecucion de este contexto.
    Para su fortuna tiene el cheat para darle siempre en la cabeza a un zombie en cada disparo pero
    no puede matar mas de un zombie por bala.

    Representar esta secuencia agregando mensajes de derrota o victoria en caso de que flor muera o sobreviva.
*/

// Math -> biblioteca de funciones prefabricadas matematicas
// Elevar al cuadrado o al cubo Math.pow()
// Redondear un numero Math.round()

// let balas = Math.round(Math.random() * 20);

// for(let zombie = 10; zombie > 0; zombie--){
//     balas = balas - 1
// }

// if(balas > -1){
//     console.log('You survive, mission complete!')
// } else {
//     console.log('You died, mission failed!')
// }