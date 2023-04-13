const obj = {
    nombre : 'Jorge',
    apellido: 'Vega',
    edad: 23,
    direccion: 'Calle falsa 123',
    cp: 3300,
    mail: 'mail@mail.com',
}

// function cualquiera (obj){
//     //retorna una version reducida de obj
//     const {nombre, apellido, mail} = obj

//     return {
//         nombre,
//         apellido,
//         mail,
//     }
// }

// function cualquiera ({nombre, apellido, mail}){
//     return {
//         nombre,
//         apellido,
//         mail,
//     }
// }

//!retorna una version reducida de obj
const cualquiera = ({nombre, apellido, mail}) => {
    return {
        nombre,
        apellido,
        mail,
    }
}
console.log(obj);
console.log(cualquiera(obj));


//!Se utiliza para arrays pequeños que se conoce su contenido
const arr = ["value x" , () => {}] //*Ejemplo 100% react

const [valor, funcion] = arr

console.log(valor);
console.log(funcion);