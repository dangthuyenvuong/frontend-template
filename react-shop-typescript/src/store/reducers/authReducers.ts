import { AUTH_LOGOUT, LOGIN } from "store/type"



type AuthStoreState = {
    user?: {
        name: string,
        avatar: string
    },
    login: boolean
}

type PayloadAction = {
    type: string,
    payload: AuthStoreState['user']
}

let user: AuthStoreState['user'];

try {
    user = JSON.parse(localStorage.getItem('login') || '')
} catch (err) {
}



const initState: AuthStoreState = {
    user,
    login: !!user
}




const authReducer = (state = initState, action: PayloadAction) => {
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
                user: undefined
            }
    }
    return state
}

export default authReducer