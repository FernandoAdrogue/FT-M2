//*hacer a place jolder una peticion get a /user
//*recibo info de ususarios en un array
//*quiero mostrar una lista de nombres de usuarios

//*con DOM Api
const userList = document.querySelector('#usersList')

//?con Jquery
//const userList = $('#usersList')[0] 

const USERS_BASE = "https://jsonplaceholder.typicode.com"


const createListItems = (user) => {
    const item = document.createElement('li')
    item.innerHTML = user.name
    
    //*con DOM Api
    userList.appendChild(item)
    
    //?con Jquery
    //userList.append(item)
}

const showUsers = (users) => {
    //*recorrer y crear en cada paso que represente a cada usuario
    users.forEach(createListItems)
}

//?peticion GET con AJAX de JQuery
$.get(`${USERS_BASE}/users`, showUsers)

//* Como eliminar un elemento del servidor con AJAX
// $.ajax({
//     url: `${USERS_BASE}/users/${idItem}`, // URL del elemento a borrar
//     type: 'DELETE',                       // DELETE
//     success: () => {},                    // callback que se ejecuta cuando termima la peticion
// })