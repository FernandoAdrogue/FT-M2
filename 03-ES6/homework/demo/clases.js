// function Persona(nombre, apellido){
//     this.nombre = nombre;
//     this.apellido = apellido;
// }

class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    getNombre(){
        return this.nombre;
    }
}

const persona1 = new Persona('Jorge', 'Vega');

console.log(persona1);

console.log(persona1.getNombre());


class Empleado extends Persona { //!extends es para la herencia de clses
    constructor(nombre, apellido, cargo) {//*se llama al constructor con todos las propiedas necesarias
        super(nombre, apellido);//! se llama al constructor de la clase padre con super con las propiedades heredadas
        this.cargo = cargo //* se asignan las propiedades exclusibas de la clases hija
    }

    getCargo() {
        return this.cargo;
    }
}

const empleado1 = new Empleado('Jorge', 'Vega', 'Instructor');

console.log(empleado1);//Propiedades Nombre y Apellido heredados Propiedad cargo propia

console.log(empleado1.getNombre());//Metodo heredado

console.log(empleado1.getCargo());//Metodo propio