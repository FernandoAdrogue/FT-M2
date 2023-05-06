const GET_CHARACTERS = "GET_CHARACTERS"


const getCharacters =()=> {
    return {
        type: GET_CHARACTERS,
        payload: [{id:1 ,name: "Jorge"},
                  {id:2 ,name: "María"}],
    }
}

export {
    GET_CHARACTERS,
}

export default getCharacters