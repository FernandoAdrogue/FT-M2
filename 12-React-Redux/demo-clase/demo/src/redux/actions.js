import axios from 'axios'
const GET_CHARACTERS = "GET_CHARACTERS"

//*implementacion para cuando se configura un store para actions sincronas
// const getCharacters =()=> {
//     return {
//         type: GET_CHARACTERS,
//         payload: [{id:1 ,name: "Jorge"},
//                   {id:2 ,name: "María"}],
//     }
// }

//?Implementacion para cuando se configura un store para action asincronas
//?la action creator retorna una funsion que hace la peticion asincrona
const getCharacters= () => {
    return function(dispath){
        axios('https://jsonplaceholder.typicode.com/users')
        .then(({data})=>dispath({
            type: GET_CHARACTERS,
            payload:data
        }))
    }
}

//todo--//Implementacio de la peticion asincronica con feth
// const getCharacters=()=> {
//     return function(dispath){
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response) =>response.json())
//         .then((data) => dispath({type: GET_CHARACTERS, payload: data}))
//     }
// }

export {
    GET_CHARACTERS,
}
 
export default getCharacters