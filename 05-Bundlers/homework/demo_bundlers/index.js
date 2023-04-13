// const modulo = (function(){
//     const dias = ["Domindo", "Lunes", "Martes"]

//     return {
//         name: (index) => {
//             return dias[index]
//         },
//     }
// })()


// console.log(modulo.name(1));

// const {suma} = require("./funciones")   //module.exports --> require se utiliza en el backend
// const {num1, num2} = require("./variables")

import {suma, resta} from "./funciones"
import {num1, num2} from "./variables"

const resultado = suma(num1,num2)
alert(resultado)
console.log(resultado);
