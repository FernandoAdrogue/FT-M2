const { INCREMENTO, DECREMENTO, INCREMENTO_IMPAR, /* INCREMENTO_ASYNC*/ } = require('../action-types');

const initialState = {
  contador: 0
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

function contador(state = initialState, {type, /* payload */}) {//el payload es opcional
  switch(type){
    case INCREMENTO: return {
      ...state,
      contador: state.contador + 1
      }
    case DECREMENTO: return {
      ...state,
      contador: state.contador - 1
      }
    case INCREMENTO_IMPAR: return {
      ...state,
      contador :state.contador % 2 !== 0 ? state.contador + 1: state.contador
      }
    //case INCREMENTO_ASYNC: return {
    //  ...state,
    //Peticion Asincrona simulada
    //  }
    default: return {
        ...state,
      }
  }
}

module.exports = contador;