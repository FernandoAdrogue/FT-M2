import axios from 'axios'
import { GET_USERS, GET_USERS_DETAIL } from './action-types'

//*implementacion para cuando se configura un store para actions sincronas
// export const getCharacters =()=> {
//     return {
//         type: GET_CHARACTERS,
//         payload: [{id:1 ,name: "Jorge"},
//                   {id:2 ,name: "María"}],
//     }
// }

//?Implementacion para cuando se configura un store para action asincronas
//?la action creator retorna una funsion que hace la peticion asincrona
// export const getUsers= () => {
//     return function(dispath){
//         axios('https://jsonplaceholder.typicode.com/users')
//         .then(({data})=>dispath({
//             type: GET_USERS,
//             payload:data
//         }))
//     }
// }

export const getUsers = () => {
    return async function(dispath){
        const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
        return dispath({
            type:GET_USERS,
            payload: resp.data
        })
    }
}

export const getUserDetail = (id) => {
    return async function(dispatch){
        const resp = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        return dispatch({
            type:GET_USERS_DETAIL,
            payload: resp.data
        })
    }
}


//todo--//Implementacio de la peticion asincronica con feth
//export const getCharacters=()=> {
//      return function(dispath){
//     //*En el chekpoint pueden pedir que se ponga un retun antes del fetch
//          /*return*/fetch('https://jsonplaceholder.typicode.com/users')
//              .then((response) =>response.json())
//              .then((data) => dispath({type: GET_CHARACTERS, payload: data}))
//     }
// }

// export const getUsers = () => {
//     return function(dispath){
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(resp => resp.json())
//         .then(data => dispath({
//             type:GET_USERS,
//             payload: data
//         }))
//     }
// }

// export const addCharacter = (character) => {
//     return {
//         type:ADD_CHARACTER,
//         payload: character
//     }
// }

// export const removeCharacter = (id) => {
//     return {
//         type: REMOVE_CHARACTER,
//         payload: id,
//     }
// }