
// REPRESENTACION
// const window = {
//     document: {
//         doctype: {},
//         html: {},
//         head: {},
//         body: {
//             section: {}
//         }
//     }
// }

// DOM
// console.log(document)

// DOCTYPE
// console.log(document.doctype)

// html
// console.log(document.documentElement)

// head
// console.log(document.head)

// body
// console.log(document.body)


// SELECTORES
// Etiqueta -> getElementsByTagName(elemento)
// console.log(document.getElementsByTagName('section'))
// Clase -> getElementsByClassName(clase)
// console.log(document.getElementsByClassName('perritos'))
// ID -> getElementById(id)
// console.log(document.getElementById('gatitos'))

// Consultas de selector universales
// Consultor individual -> querySelector()
// console.log(document.querySelector('section'))
// console.log(document.querySelector('.perritos'))
// console.log(document.querySelector('#gatitos'))

// Consultor general -> querySelectorAll()
// console.log(document.querySelectorAll('section'))
// console.log(document.querySelectorAll('.perritos'))
// console.log(document.querySelectorAll('#gatitos'))

// const $a = document.querySelector('a');

// $a.target = "_blank";

// console.log($a)

// let texto = `
//     <p>
//         Lorem ipsum dolor <b>sit amet</b> consectetur 
//         <mark>adipisicing elit</mark>. Quisquam, nemo.
//     </p>
// `

// const $article = document.querySelector('article');

// // $article.textContent = texto;
// $article.innerHTML = texto;