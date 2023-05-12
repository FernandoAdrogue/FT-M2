import { GET_USERS,GET_USERS_DETAIL } from "./action-types"

const initialState= {
    users: [],
    userDetail: {}
}


const rootReducer = (state = initialState,action)=>{
    switch (action.type) {
        case GET_USERS: return {
            ...state,
            users: action.payload,
        }
        case GET_USERS_DETAIL: return {
            ...state,
            userDetail: action.payload
        }
        default: return {
            ...state,
        }
    }
}

export default rootReducer