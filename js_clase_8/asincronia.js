/****** ASINCRONIA ******/


// console.log('Instruccion 1')
// console.log('Instruccion 2')

// setTimeout(() => console.log('Instruccion 3'), 4000);

// console.log('Instruccion 4')
// console.log('Instruccion 5')


/****** PETICIONES  *****/
// CRUD -> Create Read Update Delete
// GET -> Obtencion -> Leer
// POST -> Creacion -> Insersion
// PUT -> Edicion -> Actualizacion
// DELETE -> Eliminar -> Remocion

const $pokemons = document.querySelector('.pokemons');

fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(data) {
        console.log(data.results)

        data.results.forEach(pokemon => {

        const $li = document.createElement('li');
        $li.textContent = pokemon.name;
        $pokemons.appendChild($li);
    })
})

