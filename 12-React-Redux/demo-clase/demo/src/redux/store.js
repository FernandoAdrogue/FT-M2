
//*Implementacion del store para acctions sincronas
// import { createStore } from "redux";
// import rootReducer from "./reducer";

// const store = createStore(rootReducer);


// export default store
//*-------------------------------------------------------------------------

//?Implementacion para accition asincronas y peticiones a API
//!ESTA CONFIGURACION NO CAMBIA, SIEMPRE SE USA LA MISMA!!!
import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from './reducer'

import thunkMiddleware from 'redux-thunk'

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_CONPOSE__|| compose

const store = createStore(
    rootReducer,
    composeEnhacer(applyMiddleware(thunkMiddleware))
)

export default store