/* //*Mi version antes del code review
const URL_BASE = 'http://localhost:5000'

const listItems = document.getElementById('lista')

const buttonGetFriends = document.getElementById('boton')

const buttonsearchById = document.getElementById('search')

const buttondeleteById = document.getElementById('delete')

const searchDataOutput = document.getElementById('amigo')

const createItem = (friend) => {
    const item = document.createElement('li')
    item.innerHTML = friend.name
    listItems.appendChild(item)
}

const showList = (friends) => {
    listItems.innerHTML=""
    friends.forEach(createItem);
}

const getAmigos = () => $.get(`${URL_BASE}/amigos`,showList)

const setHeader = ()=> {
    const verAmigos = document.getElementsByClassName('verAmigos')
    const misAmigos = document.getElementById('misAmigos')
    for(const element of verAmigos){element.setAttribute('style','display: none')}
    misAmigos.removeAttribute('style')
}

const showFriends = () => {
    setHeader()
    getAmigos()
}

const getIdsearch = () => {
    const inputIDsearch = document.getElementById('input')
    return inputIDsearch.value
}

const getIdDelete = () => {
    const inputIDDelete = document.getElementById('inputDelete')
    return inputIDDelete.value
}

const showsearchData =  (result) => {
    searchDataOutput.innerHTML = `Busqueda por Id: ${getIdsearch()}, <b>${result.name}</b>`
}

const getFriend = () => $.get(`${URL_BASE}/amigos/${getIdsearch()}`, showsearchData)

const showFriend = () => {
    if(getIdsearch()){ 
                        searchDataOutput.innerHTML = '<b>Id inexistente</b>'
                        getFriend()
                    }
}

const resultSuccesDelete = () => {
    showFriends()
    document.getElementById('success').innerHTML = `Eliminación exitosa`
}


const deleteFriend = () => $.ajax({
                                    url: `${URL_BASE}/amigos/${getIdDelete()}`,
                                    type: 'DELETE',
                                    success: resultSuccesDelete,
})

buttonGetFriends.addEventListener('click',showFriends)
buttonsearchById.addEventListener('click',showFriend)
buttondeleteById.addEventListener('click',deleteFriend)
*/
//*Version del code review


const lista = document.getElementById('lista')

const boton = document.getElementById('boton')

const URL = 'http://localhost:5000'


const listFriends = (friends) => {
    lista.innerHTML = ""
    friends.forEach (({id, name}) => {//destructuring de friend
        const li = document.createElement('li')
        li.innerHTML = `${id} - ${name}`
        lista.appendChild(li)
    })
}

const showFriends = ( ) => {
    $.get(`${URL}/amigos`, listFriends)
}

boton.addEventListener('click', showFriends)

//********************************************************************************** */

const input = document.getElementById('input')

const search = document.getElementById('search')

const amigo = document.getElementById('amigo')

const getFrienName = ({name}) => {
    amigo.innerHTML = name
}

const notFound = (elemHTML,id) => {
    elemHTML.innerHTML = `El ID ${id} no existe`
}

const showFriendName = () => {
    const id = input.value
        $.ajax({
            url: `${URL}/amigos/${id}`,
            type: 'GET',
            success: getFrienName,
            error: notFound(amigo,id),
        })
}

search.addEventListener('click', showFriendName)

//***************************************************************************** */

const inputDelete = document.getElementById('inputDelete')
const deleteButton = document.getElementById('delete')
const success = document.getElementById('success')

const showSuccsses = () => {
    success.innerHTML = "Amigo eliminado con éxito"
    inputDelete.value = ""
    showFriends()
    
}

const deleteFriend = () => {
    const id = inputDelete.value
    $.ajax({
        url: `${URL}/amigos/${id}`,
        type: 'DELETE',
        success: showSuccsses,
        error: notFound(success,id),
    })
}

deleteButton.addEventListener('click', deleteFriend)