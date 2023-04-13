const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const newArray = [...arr1, ...arr2, 7, 8, 9]//Operador spread (...) equivale a "los elementos de"

const persona1 = {
    nombre: 'jorge',
    edad: 23,
}

const persona2 = {
    ...persona1, //*operador spread (...) equivale a "las propiedades de"
    mail: "mail@mail.com",
    edad: 20, //*se pueden redefinir las propiedades copiadas con spread
}

console.log(persona1);
console.log(persona2);
