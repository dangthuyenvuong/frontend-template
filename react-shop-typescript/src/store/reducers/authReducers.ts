import { AUTH_LOGOUT, LOGIN } from "store/type"

let user = null;

try{
    user = JSON.parse(localStorage.getItem('login') || '')
}catch(err){
    user = null
}

const initState = {
    user,
    login: !!user
}


const authReducer = (state = initState, action: any) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload,
                login: true
            }

        case AUTH_LOGOUT:
            return {
                login: false,
                user: null
            }
    }
    return state
}

export default authReducer