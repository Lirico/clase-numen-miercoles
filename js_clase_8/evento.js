/********** EVENTOS ********/


// console.log(window)

function imprimir(){
    console.log('Ejectuado a travez de un boton')
}

const $button = document.querySelector('button');

// $button.onclick = imprimir;

// Escuchador de eventos
// w

// Eventos disponibles
/* 
    onclick
    onclose -> se cierra una ventana
    onmouseover -> cuando pasamos el mouse por arriba de algo
    onmouseout -> cuando quitamos el mouse de arriba de algo
    onscroll -> cuando detecta que movemos la ruedita el mouse
    onresize -> cuando detecta que redimensionamos la pantalla del navegador
    DOMContentLoaded -> Cuando recargue el navegador
    onkeypress -> cuando presionamos X tecla del teclado
    onkeydown -> cuando mantenemos una tecla presionada
    onkeyup -> cuando soltamos una tecla
    onsubmit -> cuando detecta que clickeamos el boton de envio de un formulario
    onchange -> cuando detecta que un cajon de formulario (input) recibe camios en su valor
*/

// Creando un Counter Strike
// document.addEventListener('click', function(){
//     console.log('disparar')
// })

// document.addEventListener('keypress', function(event){
//     if(event.key === "w"){
//         console.log('mover adelante')
//     }
//     if(event.key === "a"){
//         console.log('mover izquierda')
//     }
//     if(event.key === "s"){
//         console.log('mover atras')
//     }
//     if(event.key === "d"){
//         console.log('mover derecha')
//     }
// })

// document.addEventListener('contextmenu', function(){
//     console.log('ampliar mira')
// })

// Manejando un formulario
// const $form = document.querySelector('form');
// const $name = document.querySelector('#name');
// const $email = document.querySelector('#email');

// function handleSubmit(event) {
//     event.preventDefault()

//     if(!$name.value){
//         console.log('El nombre de usuario es obligatorio')
//         return;
//     }
//     if(!$email.value){
//         console.log('La direccion de correo electronico es obligatoria')
//         return;
//     }

//     console.log({
//         name: $name.value,
//         email: $email.value
//     })

//     handleReset()
// }

// function handleReset(){
//     $name.value = "";
//     $email.value = "";
// }

// $form.addEventListener('submit', handleSubmit)



