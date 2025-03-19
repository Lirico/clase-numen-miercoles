

/* RECURSION O RECURSIVIDAD */
// Es el arte de crear una funcion que se llama a si misma una y otra vez hasta que una condicion deja de cumplirse. 
/* 
    Actua similar a un bucle con la diferencia de que no puede tener ejecucion infinita por defecto y que ademas es 3 veces
    mas lento. 
*/
/* 
    A pesar de ser mas lento en lineas generales que un bucle, es mas comunicativo y facil de leer.
*/

// Cuenta regresiva
// const cuentaRegresiva = (numero) => {
//     console.log(numero)

//     let proximoNumero = numero - 1

//     if(proximoNumero >= 0){
//         cuentaRegresiva(proximoNumero)
//     }
// }

// cuentaRegresiva(3)

// Secuencia de Fibonacci
// Formula: Fn = F(n–2) + F(n–1) donde n ≥ 2.
// 0, 1, 1, 2, 3, 5, 8...

// const f = n => {
//     if(n < 2) return n;
    
//     return f(n - 1) + f(n - 2)
// }




// console.log(f(45))