// function sumar(a,b){
//     const resultado = a + b;
//     return resultado;
// }

//*************************************************** */
//!Una arrow function es una definicion de una funcion y se cuarda en una variable

// const sumar = (a, b) => {
//     const resultado = a+b
//     return resultado
// };

//console.log(sumar(5, 8));

//const sumar = (a ,b) => a + b; //! sin las llaves el return es implicito Forma abreviada de la arrow function

//const sumar = (a, b) => {//* con las llaves el retunr es necesario para devolver el resultado de la funcion
//    return a + b
//}

//const arr = [1,2,3,4,5,6,7,8,9,];

// const pares = arr.filter(function (num){ 
//     return num % 2 === 0;
// })

// const pares = arr.filter((num) => { //!mejor practica para entender el codigo
//     return num % 2 === 0; 
// })

//const pares = arr.filter((num) => num % 2 === 0);//!mejor practica para hacer el codigo mas breve

// const bob = { //!En este caso el This dentro de la callback no apunta a bob se trendria que bindear para this sea bob
//     nombre: 'bob',
//     amigos: ['Juan','Pedro','Martin'],

//     printFriends() {
//         this.amigos.forEach(function (friend) {
//             console.log(this.nombre, 'conoce a', friend);
//         })
//     },
// };

const bob = { //*la function arrow bindea automaticamente para solucionar el problema del this en la callback
    nombre: 'bob',
    amigos: ['Juan','Pedro','Martin'],

    printFriends() {
        this.amigos.forEach((friend) => {
            console.log(this.nombre, 'conoce a', friend);
        })
    },
};

bob.printFriends();